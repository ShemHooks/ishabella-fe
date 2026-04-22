'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Terminal, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toAuth = () => {
    router.replace('/screen/auth');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Services', href: '/services-screen' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      {/* Glassmorphic Background Layer */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-md border-b border-emerald-900/100 shadow-sm" />

      <div className="relative max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Brand Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <img
            src="/images/logo.png"
            alt="Ishabella"
            className="h-18 w-auto object-contain brightness-0 grayscale"
          />
        </div>

        {/* Center Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900/100 hover:text-emerald-500 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-6">
          <button
            onClick={toAuth}
            className="hidden md:flex items-center gap-2 bg-emerald-600 text-white px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] shadow-lg hover:bg-emerald-900 transition-all active:scale-95"
          >
            Sign in to System
            <ChevronRight size={14} />
          </button>

          {/* Mobile Toggle */}
          <button className="md:hidden text-emerald-900 p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Industrial Transition */}
      {open && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#022c22] border-t border-emerald-500/20 shadow-2xl p-8 space-y-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-xl font-black uppercase tracking-tighter text-white hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="h-px w-full bg-emerald-500/10 my-4" />

          <button
            onClick={toAuth}
            className="w-full flex items-center justify-between bg-emerald-500 text-white px-6 py-5 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl"
          >
            Sign in to System
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </nav>
  );
}
