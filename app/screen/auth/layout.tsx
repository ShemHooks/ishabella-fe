import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import '../../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ISHABELLA',
  description: 'From Cooling Solutions to Solar Innovation',
  icons: {
    icon: '/images/logo2.png',
  },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <div className="h-screen flex">
        {/* LEFT SIDE */}
        <div className="hidden md:flex w-1/2 relative">
          <img src="/images/bg.png" alt="solar" className="object-cover w-full h-full" />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100">
          {children}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
