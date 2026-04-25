"use client";

import React from "react";
import { 
  AlertTriangle, 
  ShoppingBag, 
  Database, 
  ArrowRight,
  TrendingDown,
  RefreshCcw
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LowStockPage() {
  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber=-500 mb-2">
              <AlertTriangle size={16} strokeWidth={3} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Deficiency Alert Protocol</span>
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tighter text-[#064e3b]">
              Low Stock Items
            </h1>
          </div>

          <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 rounded-xl font-black uppercase tracking-widest text-[11px] shadow-lg shadow-amber-900/20 transition-all active:scale-95 flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={3} />
            Generate Purchase Order
          </Button>
        </div>

        {/* Critical Level Banner */}
        <div className="bg-amber-50 border-l-8 border-amber-500 p-6 rounded-2xl mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="bg-amber-500 p-3 rounded-xl text-white">
                    <TrendingDown size={24} strokeWidth={3} />
                </div>
                <div>
                    <p className="text-[10px] font-black uppercase text-amber-900 tracking-widest">Global Status</p>
                    <p className="text-sm font-bold text-amber-900/60 uppercase">Critical Thresholds Detected in 01 Assets</p>
                </div>
            </div>
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-amber-600 hover:text-amber-900 transition-colors">
                <RefreshCcw size={14} /> Recalibrate Thresholds
            </button>
        </div>

        {/* Asset Registry Table */}
        <div className="bg-white rounded-3xl shadow-2xl border border-emerald-900/5 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-emerald-50/50 border-b border-emerald-900/5">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/40">Resource Identifier</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/40">Status Registry</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/40 text-right">Magnitude Remaining</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/40 text-right">Operation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-900/5">
              <tr className="hover:bg-amber-50/30 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-emerald-900 rounded-lg flex items-center justify-center text-emerald-400">
                      <Database size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-emerald-900 uppercase tracking-tight">Battery Pack 24V</p>
                      <p className="text-[9px] font-bold text-emerald-900/30 uppercase tracking-tighter">SKU: BAT-24V-IND</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="text-[9px] font-black text-amber-600 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-widest">
                    Critical Level
                  </span>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-black text-amber-600 leading-none">03</span>
                    <span className="text-[8px] font-black text-emerald-900/20 uppercase tracking-widest">Units Available</span>
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                    <button className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-900 text-white hover:bg-emerald-700 transition-all shadow-md active:scale-90">
                        <ArrowRight size={18} strokeWidth={3} />
                    </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="bg-emerald-50/20 px-8 py-4 border-t border-emerald-900/5">
             <p className="text-[9px] font-black uppercase tracking-[0.5em] text-emerald-900/20 text-center">
                Automated Depletion Monitoring Active
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}