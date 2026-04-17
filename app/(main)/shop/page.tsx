"use client";
import React from "react";
import AboutPage from "../../../components/LandingPage/Aboutpage";
import {
  Search,
  Star,
  ShoppingCart,
  Truck,
  ShieldCheck,
  Zap,
  Filter,
  ArrowRight
} from "lucide-react";

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "170W Monocrystalline Solar Panel",
      price: 6000,
      oldPrice: 1500,
      rating: 4.8,
      sold: "8k+",
      badge: "Top Rated",
      image: "/images/solar-panel.png",
      category: "Solar"
    },
    {
      id: 2,
      name: "Complete 1kW Home Solar Kit",
      price: 11000,
      oldPrice: 56300,
      rating: 4.9,
      sold: "5k+",
      badge: "Best Value",
      image: "/images/solar-kit.png",
      category: "Bundles"
    },

    {
      id: 3,
      name: "Complete 1kW Home Solar Kit",
      price: 12000,
      oldPrice: 56300,
      rating: 4.9,
      sold: "5k+",
      badge: "Best Value",
      image: "/images/solar-kit.png",
      category: "Bundles"
    },
    {
      id: 4,
      name: "Complete 1kW Home Solar Kit",
      price: 7000,
      oldPrice: 56300,
      rating: 4.9,
      sold: "5k+",
      badge: "Best Value",
      image: "/images/solar-kit.png",
      category: "Bundles"
    },
    // ... rest of your products
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. PREMIUM HEADER */}
      <header className="bg-white border-b border-emerald-50 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center gap-6">
          <h1 className="text-2xl font-black text-[#064e3b] italic uppercase tracking-tighter">
            Ishabella <span className="text-emerald-500 font-medium">Store</span>
          </h1>
          
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="What are you looking for today?"
              className="w-full bg-slate-50 border-none py-4 px-12 rounded-2xl text-sm focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
            />
          </div>

          <div className="flex gap-4">
            <button className="p-4 bg-slate-50 rounded-2xl text-[#064e3b] hover:bg-emerald-50 transition-colors">
              <Filter size={20} />
            </button>
            <button className="p-4 bg-[#064e3b] text-white rounded-2xl shadow-lg shadow-emerald-900/20">
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>

        {/* TRUST BAR (Simplified) */}
        <div className="bg-[#064e3b] py-3">
          <div className="max-w-[1200px] mx-auto flex justify-center gap-6 md:gap-12 text-[10px] font-black uppercase tracking-[0.15em] text-emerald-100">
            <div className="flex items-center gap-2"><Truck size={14}/> Fast Shipping</div>
            <div className="flex items-center gap-2 border-x border-emerald-800 px-6 md:px-12"><ShieldCheck size={14}/> 100% Authentic</div>
            <div className="flex items-center gap-2"><Zap size={14}/> Partner Warranty</div>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-12">
        
        {/* SECTION TITLE */}
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-black text-[#064e3b] italic uppercase tracking-tighter">Our <span className="text-emerald-500 font-medium">Catalog</span></h2>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-2">Premium Solar & Cooling Solutions</p>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-[40px] p-4 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-slate-50 rounded-[32px] overflow-hidden mb-6 flex items-center justify-center p-6">
                <img
                  src={product.image}
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                  alt={product.name}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#064e3b] text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {product.badge}
                </div>
              </div>

              {/* Product Info */}
              <div className="px-2 flex flex-col flex-1">
                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">{product.category}</p>
                <h4 className="text-md font-bold text-slate-800 leading-tight mb-4 group-hover:text-emerald-600 transition-colors">
                  {product.name}
                </h4>

                <div className="mt-auto pt-4 border-t border-slate-50">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-slate-400 text-[10px] line-through font-bold">₱{product.oldPrice.toLocaleString()}</p>
                      <p className="text-2xl font-black text-[#064e3b] tracking-tighter">
                        ₱{product.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-lg">
                      <Star size={12} className="fill-orange-400 text-orange-400" />
                      <span className="text-xs font-black text-orange-600">{product.rating}</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-[#064e3b] hover:bg-emerald-700 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all group-hover:shadow-lg shadow-emerald-900/20">
                    Buy Product <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <AboutPage />
    </div>
  );
}