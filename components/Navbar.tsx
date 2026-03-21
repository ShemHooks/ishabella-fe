"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const toAuth = () => {
    router.replace("/screen/auth");
  };

  return (
    <nav className="bg-white  fixed w-full z-50">
      <div className="relative flex items-center h-20 px-6">
        <div className="absolute left-6 flex items-center gap-3">
          <img src="/images/logo.png" alt="" className="h-20 w-30" />
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 text-black">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/services-screen">Services</Link>

          <Link href="/about">About</Link>
        </div>

        <div className="absolute right-6 text-black">
          <button className="hidden md:block" onClick={toAuth}>
            Sign in
          </button>

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
          <Link href="/services-screen" className="block">
            Services
          </Link>
          <Link href="/about" className="block">
            About
          </Link>

          <Link href="/screen/landing-page/auth" className="block">
            Sign in
          </Link>
        </div>
      )}
    </nav>
  );
}
