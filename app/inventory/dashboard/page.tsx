"use client";

import React from "react";
import { 
  Package, 
  AlertTriangle, 
  ArrowDownLeft, 
  ArrowUpRight, 
  Layers, 
  TrendingUp, 
  Activity,
  ChevronRight
} from "lucide-react";

export default function InventoryDashboard() {
  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 mb-2">
              <Layers size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Logistics Command</span>
            </div>
            <h1 className="text-4xl font-black uppercase  tracking-tighter text-[#064e3b]">
              Inventory 
            </h1>
          </div>
          <div className="flex items-center gap-3 bg-white p-2 rounded-2xl shadow-sm border border-emerald-900/5">
             <div className="bg-emerald-500 p-2 rounded-xl text-white">
                <Activity size={18} />
             </div>
             <div className="pr-4">
                <p className="text-[9px] font-black uppercase text-emerald-900/40 leading-none">System Health</p>
                <p className="text-[11px] font-bold text-emerald-900">Synchronized</p>
             </div>
          </div>
        </div>

        {/* Tactical Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          {/* Total Assets */}
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-emerald-900/5 relative overflow-hidden group hover:border-emerald-500/30 transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Package size={80} strokeWidth={1} />
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40 mb-4 flex items-center gap-2">
                <Package size={14} className="text-emerald-500" /> Total Items
            </h3>
            <div className="flex items-end gap-2">
                <p className="text-4xl font-black tracking-tighter text-emerald-900 leading-none">120</p>
                <span className="text-[10px] font-bold text-emerald-500 uppercase pb-1">Units</span>
            </div>
          </div>

          {/* Critical Low Stock */}
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-rose-900/5 relative overflow-hidden group hover:border-rose-500/30 transition-all">
            <div className="absolute top-0 right-0 p-4 text-rose-500 opacity-5 group-hover:opacity-10 transition-opacity">
                <AlertTriangle size={80} strokeWidth={1} />
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-rose-900/40 mb-4 flex items-center gap-2">
                <AlertTriangle size={14} className="text-rose-500" /> Low Stock
            </h3>
            <div className="flex items-end gap-2">
                <p className="text-4xl font-black tracking-tighter text-rose-600 leading-none">08</p>
                <div className="bg-rose-100 text-rose-600 text-[8px] font-black px-2 py-1 rounded-md uppercase tracking-tighter mb-1 animate-pulse">
                    Action Required
                </div>
            </div>
          </div>

          {/* Incoming Logistics */}
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-emerald-900/5 group hover:border-emerald-500/30 transition-all">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40 mb-4 flex items-center gap-2">
                <ArrowDownLeft size={14} className="text-blue-500" /> Incoming
            </h3>
            <div className="flex items-end gap-2">
                <p className="text-4xl font-black tracking-tighter text-emerald-900 leading-none">25</p>
                <span className="text-[10px] font-bold text-blue-500 uppercase pb-1">+12% Growth</span>
            </div>
          </div>

          {/* Outgoing Logistics */}
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-emerald-900/5 group hover:border-emerald-500/30 transition-all">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40 mb-4 flex items-center gap-2">
                <ArrowUpRight size={14} className="text-emerald-500" /> Outgoing
            </h3>
            <div className="flex items-end gap-2">
                <p className="text-4xl font-black tracking-tighter text-emerald-900 leading-none">40</p>
                <span className="text-[10px] font-bold text-emerald-500 uppercase pb-1">Dispatched</span>
            </div>
          </div>
        </div>

        {/* Operational Flow Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Inventory Movement Tracking */}
          <div className="lg:col-span-2 bg-emerald-950 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
            <TrendingUp className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5" />
            
            <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                    <h3 className="text-xl font-black uppercase italic tracking-tight">Movement Analysis</h3>
                    <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Last 30-Day Velocity</p>
                </div>
                <button className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    Detailed Analytics
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                {[
                    { label: "Fastest Item", val: "Solar Panels" },
                    { label: "Slowest Item", val: "Brackets" },
                    { label: "Avg. Turnover", val: "14 Days" },
                    { label: "Stock Value", val: "₱4.2M" }
                ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 p-4 rounded-2xl border border-white/5">
                        <p className="text-[9px] font-black uppercase text-emerald-400/60 mb-1">{stat.label}</p>
                        <p className="text-xs font-black uppercase tracking-wide">{stat.val}</p>
                    </div>
                ))}
            </div>
          </div>

          {/* Quick Actions / Shortcuts */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-emerald-900/5">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-900/40 mb-6">Execution Links</h3>
            <div className="space-y-3">
                {[
                    "Generate Stock Report",
                    "Bulk Price Adjustment",
                    "Supplier Management",
                    "Audit Logs"
                ].map((action) => (
                    <button key={action} className="w-full flex items-center justify-between p-4 bg-emerald-50/50 hover:bg-emerald-50 rounded-2xl transition-all group">
                        <span className="text-[11px] font-black uppercase tracking-widest text-emerald-900">{action}</span>
                        <ChevronRight size={16} className="text-emerald-900/20 group-hover:text-emerald-600 transition-colors" />
                    </button>
                ))}
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-[9px] font-black uppercase tracking-[0.5em] text-emerald-900/20">
          Ishabella Integrated Inventory Management — Operational System v2.0
        </p>
      </div>
    </div>
  );
}