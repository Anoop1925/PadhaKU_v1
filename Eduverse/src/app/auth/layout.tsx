import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In - EduVerse',
  description: 'Sign in to your EduVerse account',
};

// Disable caching for auth pages
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
