"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white  fixed w-full z-50">
      <div className="relative flex items-center h-20 px-6">
        <div className="absolute left-6 flex items-center gap-3">
          <img src="/images/logo1.png" alt="" className="h-12 w-auto" />
          <h1 className="text-black text-2xl font-semibold">ISHABELLA</h1>
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 text-black">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/services">Services</Link>

          <Link href="/about">About</Link>
        </div>

        <div className="absolute right-6 text-black">
          <Link href="/login" className="hidden md:block">
            Sign in
          </Link>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-slate-800 px-6 pb-6 space-y-4 text-white">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/shop" className="block">
            Shop
          </Link>
          <Link href="/services" className="block">
            Services
          </Link>
          <Link href="/about" className="block">
            About
          </Link>

          <Link href="/login" className="block">
            Sign in
          </Link>
        </div>
      )}
    </nav>
  );
}
