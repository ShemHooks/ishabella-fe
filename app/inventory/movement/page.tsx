"use client";

import React from "react";
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  Activity, 
  Calendar, 
  Package, 
  Search,
  Filter
} from "lucide-react";

export default function MovementsPage() {
  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 mb-2">
              <Activity size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Transaction Ledger</span>
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tighter text-[#064e3b]">
              Stock Movements
            </h1>
          </div>

          <div className="flex gap-3">
             <button className="bg-white border-2 border-emerald-900/5 text-emerald-900 px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-sm hover:bg-emerald-50 transition-all flex items-center gap-2">
                <Filter size={14} /> Filter Registry
             </button>
             <button className="bg-[#064e3b] text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:bg-emerald-700 transition-all">
                Export CSV
             </button>
          </div>
        </div>

        {/* Search Bar Component */}
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-emerald-900/5 mb-6 flex items-center">
            <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900/20" size={18} />
                <input 
                    placeholder="Search by SKU, Product or Reference..." 
                    className="w-full bg-transparent p-4 pl-12 rounded-xl text-xs font-bold outline-none"
                />
            </div>
        </div>

        {/* Main Ledger Table */}
        <div className="bg-white rounded-3xl shadow-2xl border border-emerald-900/5 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-emerald-50/50 border-b border-emerald-900/5">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/40">Timestamp</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/40">Asset Description</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/40 text-center">Protocol</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/40 text-right">Magnitude</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-900/5">
              {/* Example Row: IN */}
              <tr className="hover:bg-emerald-50/30 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-emerald-900/20" />
                    <span className="text-xs font-bold text-emerald-900/60 uppercase">2026-04-06</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700">
                      <Package size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-emerald-900 uppercase">Solar Panel 550W</p>
                      <p className="text-[9px] font-bold text-emerald-900/30 uppercase tracking-tighter">REF: STOCK-IN-772</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex justify-center">
                    <span className="bg-emerald-500 text-white text-[9px] font-black px-3 py-1.5 rounded-full flex items-center gap-1.5 tracking-widest uppercase">
                      <ArrowUpRight size={12} strokeWidth={3} /> INBOUND
                    </span>
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <span className="text-lg font-black text-emerald-600">+20</span>
                </td>
              </tr>

              {/* Example Row: OUT */}
              <tr className="hover:bg-emerald-50/30 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2 text-emerald-900/20">
                    <Calendar size={14} />
                    <span className="text-xs font-bold text-emerald-900/60 uppercase">2026-04-20</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-rose-50 rounded-lg flex items-center justify-center text-rose-600">
                      <Package size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-emerald-900 uppercase">Lithium Battery B2</p>
                      <p className="text-[9px] font-bold text-emerald-900/30 uppercase tracking-tighter">REF: SALE-990</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex justify-center">
                    <span className="bg-rose-500 text-white text-[9px] font-black px-3 py-1.5 rounded-full flex items-center gap-1.5 tracking-widest uppercase">
                      <ArrowDownLeft size={12} strokeWidth={3} /> OUTBOUND
                    </span>
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <span className="text-lg font-black text-rose-600">-05</span>
                </td>
              </tr>
            </tbody>
          </table>
          
          <div className="bg-emerald-50/20 px-8 py-4 border-t border-emerald-900/5">
             <p className="text-[9px] font-black uppercase tracking-[0.5em] text-emerald-900/20 text-center">
                Registry Synchronization Complete
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}