"use client";
import React from "react";
import { 
  TrendingUp, ShoppingCart, 
  Package, AlertTriangle, ChevronRight 
} from "lucide-react";

export default function CleanDashboard() {
  const stats = [
    { 
      title: "Total Money Made", 
      value: "₱120,000", 
      description: "Total sales this month",
      icon: TrendingUp, 
      color: "text-emerald-600", 
      bg: "bg-emerald-50" 
    },
    { 
      title: "New Orders", 
      value: "320", 
      description: "Orders to be processed",
      icon: ShoppingCart, 
      color: "text-blue-600", 
      bg: "bg-blue-50" 
    },
    { 
      title: "Total Products", 
      value: "85", 
      description: "Items in your shop",
      icon: Package, 
      color: "text-[#064e3b]", 
      bg: "bg-slate-100" 
    },
    { 
      title: "Low Stock Alert", 
      value: "5", 
      description: "Items running out soon",
      icon: AlertTriangle, 
      color: "text-red-500", 
      bg: "bg-red-50" 
    },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      
      {/* 1. WELCOME SECTION */}
      <div className="mb-10">
        <h2 className="text-3xl font-black   uppercase tracking-tighter">
          Dashboard <span className="text-black">Overview</span>
        </h2>
        <p className="text-slate-500 mt-1">Good Day Admin!</p>
      </div>

      {/* 2. BIG STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-6`}>
              <stat.icon size={28} />
            </div>
            
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                {stat.title}
              </p>
              <p className={`text-3xl font-black ${stat.title === 'Low Stock Alert' ? 'text-red-500' : 'text-[#064e3b]'}`}>
                {stat.value}
              </p>
              <p className="text-xs text-slate-400 mt-2 font-medium italic">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. SIMPLE QUICK ACTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold text-[#064e3b] mb-6">Quick Tasks</h3>
          <div className="space-y-3">
            <button className="w-full flex justify-between items-center p-4 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-colors group">
              <span className="font-bold text-slate-700">View All Products</span>
              <ChevronRight className="text-slate-300 group-hover:text-emerald-500" />
            </button>
            <button className="w-full flex justify-between items-center p-4 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-colors group">
              <span className="font-bold text-slate-700">Check New Orders</span>
              <ChevronRight className="text-slate-300 group-hover:text-emerald-500" />
            </button>
            <button className="w-full flex justify-between items-center p-4 bg-slate-50 rounded-2xl hover:bg-red-50 transition-colors group">
              <span className="font-bold text-slate-700 text-red-500">Fix Low Stock Items</span>
              <ChevronRight className="text-slate-300 group-hover:text-red-500" />
            </button>
          </div>
        </div>

        {/* 4. SYSTEM STATUS (Easy to read) */}
        <div className="bg-[#064e3b] p-8 rounded-[40px] text-white flex flex-col justify-center shadow-xl shadow-emerald-900/10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            <h3 className="font-bold uppercase tracking-widest text-sm opacity-80">System is Online</h3>
          </div>
          <p className="text-emerald-100 text-sm leading-relaxed ">
            "Your store is currently live and customers can browse your solar panels and air units without any issues."
          </p>
        </div>
      </div>
    </div>
  );
}