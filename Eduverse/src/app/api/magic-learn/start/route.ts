import { NextResponse } from 'next/server';
import { spawn, exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs';

const execAsync = promisify(exec);

let backendProcess: any = null;
let heartbeatInterval: NodeJS.Timeout | null = null;
let lastHeartbeat: number = Date.now();

async function isPortInUse(port: number): Promise<boolean> {
  try {
    const { stdout } = await execAsync(`netstat -ano | findstr :${port}`);
    return stdout.trim().length > 0;
  } catch {
    return false;
  }
}

// Function to check if Magic Learn backend is responding
async function isBackendHealthy(): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    
    const response = await fetch('http://localhost:5000/api/health', {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    return response.ok;
  } catch {
    return false;
  }
}

// Function to kill the backend process
async function killBackendProcess() {
  try {
    if (backendProcess) {
      backendProcess.kill();
      backendProcess = null;
    }

    // Kill any Python process running on port 5000
    if (process.platform === 'win32') {
      try {
        // Find the PID using port 5000
        const { stdout } = await execAsync('netstat -ano | findstr :5000');
        const lines = stdout.trim().split('\n');
        const pids = new Set<string>();
        
        for (const line of lines) {
          const parts = line.trim().split(/\s+/);
          const pid = parts[parts.length - 1];
          if (pid && !isNaN(parseInt(pid))) {
            pids.add(pid);
          }
        }
        
        // Kill each PID
        for (const pid of pids) {
          try {
            await execAsync(`taskkill /F /PID ${pid}`);
            console.log(`Killed backend process ${pid}`);
          } catch {
            // Ignore if process already dead
          }
        }
      } catch {
        // No process found on port 5000
      }
    }
    
    // Clear heartbeat monitoring
    if (heartbeatInterval) {
      clearInterval(heartbeatInterval);
      heartbeatInterval = null;
    }
  } catch (error) {
    console.error('Error killing backend:', error);
  }
}

export async function POST() {
  try {
    // Check if Magic Learn backend is already running
    const alreadyHealthy = await isBackendHealthy();
    
    if (alreadyHealthy) {
      console.log('Backend already running, resetting heartbeat timer');
      lastHeartbeat = Date.now();
      return NextResponse.json({ 
        success: true, 
        message: 'Magic Learn backend is already running',
        url: 'http://localhost:5000'
      });
    }

    // Check if the backend file exists
    const backendPath = path.join(process.cwd(), 'src', 'app', 'feature-1', 'magic_learn_backend.py');
    if (!fs.existsSync(backendPath)) {
      return NextResponse.json({ 
        success: false, 
        message: `Backend file not found at: ${backendPath}`
      }, { status: 500 });
    }

    // Check if batch file exists
    const batFilePath = path.join(process.cwd(), 'src', 'app', 'feature-1', 'start_magic_learn.bat');
    if (!fs.existsSync(batFilePath)) {
      return NextResponse.json({ 
        success: false, 
        message: `Batch file not found at: ${batFilePath}`
      }, { status: 500 });
    }

    console.log('Starting Magic Learn backend...');
    console.log('Backend path:', backendPath);
    console.log('Batch file path:', batFilePath);
    
    // Use VBScript to run batch file completely hidden (no window at all)
    // Create a temporary VBS file that runs the batch file invisibly
    const vbsContent = `Set WshShell = CreateObject("WScript.Shell")
WshShell.Run """${batFilePath}""", 0, False
Set WshShell = Nothing`;
    
    const vbsPath = path.join(path.dirname(batFilePath), 'run_silent.vbs');
    fs.writeFileSync(vbsPath, vbsContent);
    
    // Execute the VBScript which will run the batch file hidden
    backendProcess = spawn('wscript.exe', [vbsPath], {
      detached: true,
      stdio: 'ignore',
      windowsHide: true
    });

    // Unref so the parent process can exit independently
    backendProcess.unref();
    
    // Clean up VBS file after a short delay
    setTimeout(() => {
      try {
        if (fs.existsSync(vbsPath)) {
          fs.unlinkSync(vbsPath);
        }
      } catch (err) {
        console.error('Failed to clean up VBS file:', err);
      }
    }, 2000);

    // Wait for the server to start and verify it's running
    let attempts = 0;
    const maxAttempts = 30; // 30 seconds max wait
    
    console.log('Waiting for Magic Learn backend to start on port 5000...');
    
    while (attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const isHealthy = await isBackendHealthy();
      
      if (isHealthy) {
        console.log(`Magic Learn backend is running (took ${attempts + 1} seconds)`);
        
        // Reset heartbeat timer
        lastHeartbeat = Date.now();
        
        // Start heartbeat monitoring (check every 5 seconds)
        if (!heartbeatInterval) {
          heartbeatInterval = setInterval(async () => {
            const timeSinceLastHeartbeat = Date.now() - lastHeartbeat;
            
            // If no heartbeat for 60 seconds, assume tab is closed (increased for uninterrupted drawing)
            if (timeSinceLastHeartbeat > 60000) {
              console.log('No heartbeat detected for 60 seconds. Stopping backend...');
              await killBackendProcess();
            }
          }, 5000);
        }
        
        return NextResponse.json({ 
          success: true, 
          message: 'Magic Learn backend started successfully',
          url: 'http://localhost:5000',
          startupTime: attempts + 1
        });
      }
      
      console.log(`Attempt ${attempts + 1}/${maxAttempts} - Backend not responding yet...`);
      attempts++;
    }

    return NextResponse.json({ 
      success: false, 
      message: 'Backend startup timeout. The server did not respond within 30 seconds.',
      details: 'Please check if Python and required packages are installed.'
    }, { status: 500 });

  } catch (error: any) {
    console.error('Error starting Magic Learn backend:', error);
    return NextResponse.json({ 
      success: false, 
      message: error.message || 'Failed to start Magic Learn backend'
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const isHealthy = await isBackendHealthy();
    
    return NextResponse.json({ 
      running: isHealthy,
      url: isHealthy ? 'http://localhost:5000' : null
    });
  } catch (error: any) {
    return NextResponse.json({ 
      running: false,
      error: error.message
    }, { status: 500 });
  }
}

// PUT - Heartbeat endpoint (called by frontend to keep backend alive)
export async function PUT() {
  try {
    lastHeartbeat = Date.now();
    console.log('Heartbeat received at', new Date(lastHeartbeat).toLocaleTimeString());
    
    return NextResponse.json({ 
      success: true, 
      message: 'Heartbeat received',
      timestamp: lastHeartbeat
    });
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      message: error.message 
    }, { status: 500 });
  }
}

// DELETE - Stop the backend manually
export async function DELETE() {
  try {
    await killBackendProcess();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Backend stopped successfully' 
    });
  } catch (error: any) {
    console.error('Error stopping backend:', error);
    return NextResponse.json({ 
      success: false, 
      message: error.message || 'Failed to stop backend' 
    }, { status: 500 });
  }
}
