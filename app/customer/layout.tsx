'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  ShoppingCart,
  Truck,
  ShieldCheck,
  Zap,
  User,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { SearchProvider, useSearch } from '@/utils/context/SearchContext';
import { getProductCategories } from '@/server/api/app';
import { useRouter } from 'next/navigation';

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <SearchProvider>
      <LayoutContent>{children}</LayoutContent>
    </SearchProvider>
  );
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { keyword, setKeyword, category, setCategory } = useSearch();
  const [categories, setCategories] = useState<any[]>([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const router = useRouter();

  const getCategories = async () => {
    const res = await getProductCategories();
    setCategories(res.data.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfdfd] text-[#022c22] font-sans">
      {/* HEADER */}
      <header className="bg-white border-b border-emerald-900/5 sticky top-0 z-50">
        <div className="w-full px-6  flex items-center justify-between">
          <Link href="/customer/shop" className="flex items-center gap-2">
            <div className="flex pl-4">
              <img
                src="/images/logo.png"
                alt="Ishabella"
                className="h-12 w-auto object-contain brightness-0 grayscale"
              />
            </div>
          </Link>

          <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center gap-6">
            <div className="relative inline-block">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="appearance-none pr-6 pl-3 py-2 outline-none  bg-white text-sm"
              >
                <option value="">Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center text-gray-500">
                {isCategoryOpen ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>

            <div>
              <button>Delivery</button>
            </div>

            <div className="relative flex-1 w-full">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900/20"
                size={16}
              />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search for Product?"
                className="w-full bg-slate-50 border-none py-2 px-12 rounded-2xl text-sm  focus:ring-1 focus:ring-emerald-500/30 transition-all outline-none"
              />
            </div>

            <div className="flex gap-4">
              <button
                className="flex gap-1 items-center cursor-pointer"
                onClick={() => router.push('/customer/profile')}
              >
                <User /> <p className="text-sm">Account</p>
              </button>
              <button
                id="cart-icon"
                className="flex gap-1 items-center"
                onClick={() => router.push('/customer/cart')}
              >
                <ShoppingCart /> <p className="text-sm">Cart</p>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#064e3b] py-3">
          <div className="max-w-[1200px] mx-auto flex justify-center gap-6 md:gap-12 text-[10px] font-black uppercase tracking-[0.15em] text-emerald-100">
            <div className="flex items-center gap-2">
              <Truck size={14} /> Fast Shipping
            </div>
            <div className="flex items-center gap-2 border-x border-emerald-800 px-6 md:px-12">
              <ShieldCheck size={14} /> 100% Authentic
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} /> Partner Warranty
            </div>
          </div>
        </div>
      </header>

      {/* ✅ THIS MUST EXIST */}
      <main>{children}</main>

      <footer className="mt-20 border-t border-emerald-900/5 py-10 text-center text-[10px] font-bold uppercase tracking-widest text-emerald-900/40">
        © {new Date().getFullYear()} Ishabella Store • All Systems Operational
      </footer>
    </div>
  );
}
