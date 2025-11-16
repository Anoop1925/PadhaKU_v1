'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Home, ArrowUpRight, LogIn, ChevronDown, Zap, Brain, Users, Trophy, ArrowRight, Play, Sparkles, Rocket, BookOpen, UserCircle, LayoutGrid, MessageSquare, UsersRound, FolderOpen, Headphones } from 'lucide-react';
import Image from 'next/image';

export default function HomeNew() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about-us', 'features', 'support'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen overflow-x-hidden ${isDark ? 'dark bg-gray-950' : 'bg-gray-50'}`}>
      {/* Ultra-Futuristic Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(56, 123, 255, 0.15) 0%, transparent 70%)',
            top: '-10%',
            left: '-5%',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(92, 86, 255, 0.12) 0%, transparent 70%)',
            bottom: '-10%',
            right: '-5%',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Animated Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#387bff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#5c56ff" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {/* Horizontal lines */}
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0"
              y1={`${i * 8.33}%`}
              x2="100%"
              y2={`${i * 8.33}%`}
              stroke="url(#circuit-grad)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
          {/* Vertical lines */}
          {[...Array(15)].map((_, i) => (
            <motion.line
              key={`v-${i}`}
              x1={`${i * 6.66}%`}
              y1="0"
              x2={`${i * 6.66}%`}
              y2="100%"
              stroke="url(#circuit-grad)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2.5,
                delay: i * 0.08,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
          {/* Circuit Nodes */}
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="3"
              fill="#387bff"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0.5, 1, 0],
                scale: [0, 1, 1.5, 1, 0]
              }}
              transition={{
                duration: 4,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>

        {/* Floating Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Cursor Follower Glow */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(56, 123, 255, 0.08) 0%, transparent 70%)',
          }}
          animate={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
          }}
          transition={{
            type: "spring",
            damping: 50,
            stiffness: 100
          }}
        />
      </div>

      {/* BEAUTIFUL FROSTED GLASS NAVBAR - INDEPENDENT FLOATING CONTAINER */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        style={{ width: 'calc(100% - 6rem)' }}
      >
        {/* Single unified navbar container - more transparent, more blur */}
        <div className="relative flex items-center justify-between gap-8 px-6 py-2.5 rounded-full backdrop-blur-3xl border border-white/30 dark:border-gray-700/30 shadow-xl overflow-hidden">
          {/* Gradient Background Layer - More transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-500/15 via-gray-300/12 via-white/12 via-white/15 to-white/15 dark:from-gray-700/18 dark:via-gray-800/15 dark:via-gray-900/12 dark:via-gray-900/12 dark:to-gray-900/12"></div>
          
          {/* LEFT: LOGO - Using Main-logo111.png - MOVED RIGHT, BIGGER */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0 cursor-pointer relative z-10 ml-2"
          >
            <Image
              src="/Main-logo22.png"
              alt="PadhaKU"
              width={175}
              height={58}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* CENTER: NAV ITEMS - FILLED BACKGROUND ON ACTIVE - MORE HEIGHT */}
          <div className="flex items-center gap-2 relative z-10">
            {[
              { id: 'home', label: 'Home', icon: Home },
              { id: 'about-us', label: 'About Us', icon: UsersRound },
              { id: 'features', label: 'Features', icon: Sparkles },
              { id: 'assets', label: 'Assets', icon: FolderOpen },
              { id: 'support', label: 'Support', icon: Headphones },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-3 rounded-full font-semibold text-[15px] transition-all duration-300 ${
                  activeSection === item.id
                    ? isDark
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                      : 'bg-[#387BFF] text-white shadow-lg'
                    : isDark 
                      ? 'text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white'
                      : 'text-gray-800 drop-shadow-md hover:bg-[#387BFF]/80 hover:text-white'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="flex items-center gap-2.5">
                  <item.icon className="w-[18px] h-[18px]" strokeWidth={2.5} />
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>

          {/* RIGHT: THEME TOGGLE + SIGN IN - MORE HEIGHT */}
          <div className="flex items-center gap-3 shrink-0 relative z-10">
            {/* Theme Toggle - FILLS ON HOVER */}
            <motion.button
              whileHover={{ 
                scale: 1.08, 
                rotate: 180,
                backgroundColor: isDark ? 'rgba(79, 70, 229, 0.5)' : '#387BFF'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className="p-3.5 rounded-full backdrop-blur-xl bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-5 h-5 text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-5 h-5 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Sign In Button - FILLS ON HOVER */}
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full backdrop-blur-xl border border-white/30 font-semibold text-[15px] shadow-lg transition-all ${
                isDark
                  ? 'bg-white/10 text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white'
                  : 'bg-white/10 text-gray-700 hover:bg-[#387BFF] hover:text-white'
              }`}
            >
              <LogIn className="w-[18px] h-[18px]" strokeWidth={2.5} />
              <span>Sign In</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* EPIC HERO SECTION WITH CUSTOM GRADIENT LEFT TO RIGHT */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-8 overflow-hidden">
        {/* CUSTOM GRADIENT BACKGROUND - LEFT TO RIGHT - VIBRANT DARK BLUE */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Vibrant Dark Blue Gradient - More interesting left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2463] via-[#1e4fb8] via-[#2563eb] via-[#3d5ab8] to-[#4a4ab0]"></div>
          
          {/* Darker overlay for more depth and contrast */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Multi-layered Woggly Waves - INVERTED - Curves Outside */}
          <div className="absolute bottom-16 left-0 right-0 h-48">
            {/* First Woggly Wave Layer - Downward Arc (Inverted) */}
            <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute bottom-0" preserveAspectRatio="none">
              <path 
                d="M0,40 C120,50 180,70 240,80 C320,95 380,110 480,115 C580,120 640,130 720,135 C800,130 860,120 960,115 C1060,110 1120,95 1200,80 C1260,70 1320,50 1440,40 L1440,180 L0,180 Z" 
                className="fill-white dark:fill-gray-950"
                opacity="0.95"
              />
            </svg>
            
            {/* Second Woggly Wave Layer - Inverted */}
            <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute bottom-0" preserveAspectRatio="none">
              <path 
                d="M0,30 C100,35 160,55 240,65 C340,80 400,95 500,100 C600,105 680,115 720,120 C760,115 840,105 940,100 C1040,95 1100,80 1200,65 C1280,55 1340,35 1440,30 L1440,180 L0,180 Z" 
                className="fill-white dark:fill-gray-950"
                opacity="0.8"
              />
            </svg>
            
            {/* Third Woggly Wave Layer - Inverted */}
            <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute bottom-0" preserveAspectRatio="none">
              <path 
                d="M0,20 C80,25 140,40 200,50 C300,65 380,80 480,85 C580,90 660,100 720,105 C780,100 860,90 960,85 C1060,80 1140,65 1240,50 C1300,40 1360,25 1440,20 L1440,180 L0,180 Z" 
                className="fill-white dark:fill-gray-950"
                opacity="0.65"
              />
            </svg>
          </div>
        </div>

        {/* FLOATING HERO IMAGE - POSITIONED ABSOLUTELY */}
        {/* EDIT POSITION: Change left and top values in pixels below */}
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute z-20"
          style={{ 
            width: '790px', 
            height: '700px',
            left: '200px',    /* EDIT: Move left/right - increase to move RIGHT */
            top: '80px'      /* EDIT: Move up/down - increase to move DOWN */
          }}
        >
          {/* Image Container - Floating Above Everything */}
          <div className="relative w-full h-full">
            <Image
              src="/Main-page.png"
              alt="PadhaKU Platform"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="flex items-center justify-end gap-12">
            
            {/* RIGHT: COMPACT HEADLINE & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 max-w-[50%] space-y-6 -mt-20 mr-8"
            >
              {/* HEADLINE - WHITE TEXT */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight"
                >
                  <span className="text-white">Learn </span>
                  <span className="relative inline-block">
                    <span className="text-cyan-300">
                      Smarter
                    </span>
                  </span>
                  <span className="text-white">,</span><br />
                  <span className="text-white">Not </span>
                  <span className="text-cyan-300">Harder</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="text-base text-white/80 max-w-md leading-relaxed"
                >
                  AI-powered personalized learning that gamifies education
                </motion.p>
              </div>

              {/* CTA Buttons - WHITE/CYAN ON BLUE BACKGROUND */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <motion.button
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 text-gray-900 font-bold text-base shadow-xl shadow-cyan-500/40 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <span className="relative flex items-center gap-2">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold text-base hover:bg-white/30 transition-all shadow-lg flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Compact Stats - WHITE TEXT */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="flex flex-wrap gap-6 pt-4"
              >
                {[
                  { icon: Users, value: '50K+', label: 'Learners' },
                  { icon: Brain, value: '1M+', label: 'AI Sessions' },
                  { icon: Trophy, value: '500K+', label: 'Achievements' },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + idx * 0.1 }}
                    className="flex items-center gap-2.5"
                  >
                    <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/20">
                      <stat.icon className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">{stat.value}</div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* About Us Section WITH GRID ANIMATION */}
      <section id="about-us" className="relative py-24 px-8 overflow-hidden bg-gradient-to-br from-indigo-50/30 to-blue-50/20 dark:from-indigo-950/30 dark:to-blue-950/20">
        {/* ANIMATED GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.25] dark:opacity-[0.12]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-about" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(56, 123, 255, 0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-about)" />
            {[...Array(15)].map((_, i) => (
              <motion.line
                key={`about-v-${i}`}
                x1={`${i * 6.66}%`}
                y1="0"
                x2={`${i * 6.66}%`}
                y2="100%"
                stroke="rgba(56, 123, 255, 0.4)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  delay: i * 0.06,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-3">
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                PadhaKU
              </span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Revolutionizing education through AI-powered personalization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: 'AI-Powered',
                description: 'Adaptive learning tailored to your pace',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Trophy,
                title: 'Gamified',
                description: 'Earn points and compete while learning',
                gradient: 'from-indigo-500 to-purple-500'
              },
              {
                icon: Zap,
                title: 'Real-Time',
                description: 'Instant feedback powered by AI',
                gradient: 'from-purple-500 to-pink-500'
              },
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg p-6 h-full transition-all duration-300 group-hover:shadow-2xl">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-4 shadow-md`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section WITH GRID ANIMATION */}
      <section id="features" className="relative py-24 px-8 overflow-hidden bg-gradient-to-br from-blue-50/30 to-indigo-50/20 dark:from-blue-950/30 dark:to-indigo-950/20">
        {/* ANIMATED GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.25] dark:opacity-[0.12]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-features" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(56, 123, 255, 0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-features)" />
            {[...Array(12)].map((_, i) => (
              <motion.line
                key={`feat-h-${i}`}
                x1="0"
                y1={`${i * 8.33}%`}
                x2="100%"
                y2={`${i * 8.33}%`}
                stroke="rgba(92, 86, 255, 0.4)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.08,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-3">
              Powerful{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need for transformative learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Magic Learn', description: 'Transform drawings into interactive experiences', icon: Sparkles },
              { title: 'AI Mentor', description: 'Personalized guidance from AI companion', icon: Brain },
              { title: 'Smart Courses', description: 'AI-generated courses for your goals', icon: BookOpen },
              { title: 'Progress Tracking', description: 'Detailed analytics and insights', icon: Trophy },
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="relative backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:border-blue-300 dark:group-hover:border-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-500/10">
                      <feature.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section WITH GRID ANIMATION */}
      <section id="support" className="relative py-24 px-8 overflow-hidden bg-gradient-to-br from-indigo-50/20 to-purple-50/15 dark:from-indigo-950/20 dark:to-purple-950/15">
        {/* ANIMATED GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.25] dark:opacity-[0.12]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-support" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(56, 123, 255, 0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-support)" />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-black mb-3">
              Need{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Support?
              </span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
              We're here to help you succeed
            </p>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-base shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
            >
              Contact Support
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer WITH GRID ANIMATION */}
      <footer className="relative py-8 px-8 border-t border-gray-200 dark:border-gray-800 overflow-hidden">
        {/* ANIMATED GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.08]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-footer" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(56, 123, 255, 0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-footer)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 PadhaKU. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
