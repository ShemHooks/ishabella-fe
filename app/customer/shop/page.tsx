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
  ArrowRight,
  Terminal
} from "lucide-react";

export default function ShopPage() {
  // To add cards, simply add more objects to this array
  const products = [
    {
      id: "ISH-SLR-170",
      name: "170W Monocrystalline Solar Panel",
      price: 6000,
      oldPrice: 7500,
      rating: 4.8,
      sold: 842,
      badge: "Priority Asset",
      image: "/images/solar-panel.png",
      category: "Photovoltaic"
    },
    {
      id: "ISH-KIT-1KW",
      name: "Complete 1kW Home Solar Kit",
      price: 11000,
      oldPrice: 56300,
      rating: 4.9,
      sold: 521,
      badge: "System Bundle",
      image: "/images/solar-kit.png",
      category: "Grid-Tie Systems"
    },
    {
      id: "ISH-BAT-LITH",
      name: "Lithium Iron Phosphate Battery",
      price: 12000,
      oldPrice: 15000,
      rating: 4.9,
      sold: 312,
      badge: "High Capacity",
      image: "/images/solar-kit.png",
      category: "Storage"
    },
    {
      id: "ISH-AC-IND",
      name: "Industrial Split Type Aircon",
      price: 25000,
      oldPrice: 32000,
      rating: 4.7,
      sold: 128,
      badge: "Critical Cooling",
      image: "/images/solar-panel.png",
      category: "HVAC Units"
    },
    {
      id: "ISH-INV-5KW",
      name: "5kW Pure Sine Wave Inverter",
      price: 18500,
      oldPrice: 21000,
      rating: 4.6,
      sold: 440,
      badge: "Power Core",
      image: "/images/solar-kit.png",
      category: "Electronics"
    },
    {
      id: "ISH-CHG-60A",
      name: "60A MPPT Charge Controller",
      price: 4500,
      oldPrice: 5800,
      rating: 4.8,
      sold: 920,
      badge: "Logic Unit",
      image: "/images/solar-panel.png",
      category: "Electronics"
    },
    {
      id: "ISH-BRK-IND",
      name: "Industrial DC Circuit Breaker",
      price: 1200,
      oldPrice: 1800,
      rating: 4.9,
      sold: 1200,
      badge: "Safety Protocol",
      image: "/images/solar-kit.png",
      category: "Safety"
    },
    {
      id: "ISH-CAB-PD",
      name: "4mm PV Wire - 100m Roll",
      price: 3500,
      oldPrice: 4200,
      rating: 4.5,
      sold: 2100,
      badge: "Base Component",
      image: "/images/solar-panel.png",
      category: "Cables"
    },
     {
      id: "ISH-CAB-PF",
      name: "4mm PV Wire - 100m Roll",
      price: 3500,
      oldPrice: 4200,
      rating: 4.5,
      sold: 2100,
      badge: "Base Component",
      image: "/images/solar-panel.png",
      category: "Cables"
    },
     {
      id: "ISH-CAB-PG",
      name: "4mm PV Wire - 100m Roll",
      price: 3500,
      oldPrice: 4200,
      rating: 4.5,
      sold: 2100,
      badge: "Base Component",
      image: "/images/solar-panel.png",
      category: "Cables"
    },
     {
      id: "ISH-CAB-PM",
      name: "4mm PV Wire - 100m Roll",
      price: 3500,
      oldPrice: 4200,
      rating: 4.5,
      sold: 2100,
      badge: "Base Component",
      image: "/images/solar-panel.png",
      category: "Cables"
    },
    {
      id: "ISH-CAB-PO",
      name: "4mm PV Wire - 100m Roll",
      price: 3500,
      oldPrice: 4200,
      rating: 4.5,
      sold: 2100,
      badge: "Base Component",
      image: "/images/solar-panel.png",
      category: "Cables"
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfd] font-sans text-[#022c22]">
      
      {/* 1. TECHNICAL HEADER */}
      <header className="bg-white border-b border-emerald-900/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-[#022c22] p-1.5 rounded-md">
                
            </div>
            <h1 className="text-xl font-black text-[#022c22] uppercase tracking-tighter">
              Ishabella <span className="text-emerald-500 font-medium">Store</span>
            </h1>
          </div>
          
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900/20" size={16} />
            <input
              type="text"
              placeholder="QUERY SYSTEM FOR ASSETS..."
              className="w-full bg-[#f8fafc] border border-emerald-900/40 py-3 px-12 rounded-xl text-[10px] font-bold uppercase tracking-widest focus:ring-1 focus:ring-emerald-500 transition-all outline-none"
            />
          </div>

          <div className="flex gap-3">
            <button className="p-3 bg-[#f8fafc] border border-emerald-900/5 rounded-xl text-[#022c22] hover:bg-emerald-50 transition-colors">
              <Filter size={18} />
            </button>
            <button className="p-3 bg-[#022c22] text-white rounded-xl shadow-lg shadow-emerald-900/20 flex items-center gap-2 hover-popup">
              <ShoppingCart size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest hidden lg:block">Cart</span>
            </button>
          </div>
        </div>

        {/* TRUST BAR */}
        <div className=" py-2.5">
          <div className="max-w-7xl mx-auto flex justify-center gap-8 md:gap-16 text-[9px] font-black uppercase tracking-[0.3em] text-black-400/100">
            <div className="flex items-center gap-2"><Truck size={12}/> Express Logistics</div>
            <div className="flex items-center gap-2 border-x border-emerald-900/100 px-8"><ShieldCheck size={12}/> Certified Assets</div>
            <div className="flex items-center gap-2"><Zap size={12}/> System Warranty</div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        
        {/* SECTION TITLE */}
        <div className="mb-12 border-l-4 border-emerald-500 pl-6">
          <h2 className="text-3xl font-black text-[#022c22] uppercase tracking-tighter">
            Our Product <span className="text-emerald-500">Catalogs</span>
          </h2>
        
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-emerald-900/5 flex flex-col transition-all duration-500 hover:border-emerald-500 hover:shadow-[0_20px_50px_rgba(2,44,34,0.08)]"
            >
              {/* Technical Ribbon */}
              <div className="bg-[#f8fafc] border-b border-emerald-900/5 px-4 py-2 flex justify-between items-center">
                <span className="text-[8px] font-black text-emerald-900/30 uppercase tracking-widest">
                  {product.id}
                </span>
                <div className="flex items-center gap-1 text-orange-400">
                  <Star size={10} className="fill-orange-400" />
                  <span className="text-[9px] font-black">{product.rating}</span>
                </div>
              </div>

              {/* Asset Image Container */}
              <div className="relative h-56 flex items-center justify-center p-8 bg-white overflow-hidden">
                <div className="absolute top-3 right-3 z-10 bg-emerald-900 text-emerald-400 text-[7px] font-black px-2 py-1 uppercase tracking-[0.2em]">
                  {product.badge}
                </div>
                <img
                  src={product.image}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  alt={product.name}
                />
              </div>

              {/* Product Info Section */}
              <div className="p-5 flex-1 flex flex-col border-t border-emerald-900/5">
                <p className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-1">
                  {product.category}
                </p>
                <h4 className="text-xs font-black text-[#022c22] uppercase tracking-tight leading-tight mb-4 min-h-[32px]">
                  {product.name}
                </h4>

                {/* Magnitude Bar */}
                <div className="mb-6 space-y-1.5">
                   <div className="flex justify-between text-[7px] font-black uppercase tracking-widest text-emerald-900/30">
                     <span>Fulfillment Volume</span>
                     <span className="text-emerald-600">{product.sold} Units</span>
                   </div>
                   <div className="h-1 w-full bg-emerald-900/5">
                     <div className="h-full bg-emerald-500 w-[65%] group-hover:w-[95%] transition-all duration-1000" />
                   </div>
                </div>

                {/* Price and CTA */}
                <div className="mt-auto pt-4 border-t border-emerald-900/5 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-bold text-emerald-900/20 line-through">
                      ₱{product.oldPrice.toLocaleString()}
                    </p>
                    <p className="text-lg font-black text-[#022c22] tracking-tighter leading-none">
                      ₱{product.price.toLocaleString()}
                    </p>
                  </div>

                  <button className="h-10 w-10 bg-[#022c22] text-white flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-900/10 active:scale-95">
                    <ArrowRight size={18} strokeWidth={3} />
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