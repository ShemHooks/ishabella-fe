"use client";

import React from "react";
import { 
  Plus, 
  Settings2, 
  History, 
  PackageSearch, 
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function adjustmentpage() {
  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 mb-2">
              <Settings2 size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Inventory Control</span>
            </div>
            <h1 className="text-4xl font-black uppercase italic tracking-tighter text-[#064e3b]">
              Stock Adjustments
            </h1>
          </div>
          
          <Button className="bg-[#064e3b] hover:bg-emerald-600 text-white px-8 py-6 rounded-xl font-black uppercase tracking-widest text-[11px] shadow-lg transition-all active:scale-95 flex items-center gap-3">
            <Plus size={18} strokeWidth={3} />
            Create Adjustment
          </Button>
        </div>

        {/* Quick Stats / Legend */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-emerald-900/5 p-4 rounded-2xl flex items-center gap-4 shadow-sm">
                <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                    <History size={20} />
                </div>
                <div>
                    <p className="text-[10px] font-black uppercase text-emerald-900/40">Recent Logs</p>
                    <p className="text-sm font-bold text-emerald-900">0 Adjustments</p>
                </div>
            </div>
            <div className="bg-white border border-emerald-900/5 p-4 rounded-2xl flex items-center gap-4 shadow-sm">
                <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
                    <AlertCircle size={20} />
                </div>
                <div>
                    <p className="text-[10px] font-black uppercase text-amber-900/40">Pending Review</p>
                    <p className="text-sm font-bold text-emerald-900">System Balanced</p>
                </div>
            </div>
            <div className="bg-emerald-900 p-4 rounded-2xl flex items-center justify-between shadow-xl">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Live Status</span>
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-black text-white uppercase">Operational</span>
                </div>
            </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-3xl shadow-2xl border border-emerald-900/5 overflow-hidden">
          {/* Table Header Styling */}
          <div className="bg-emerald-50/50 border-b border-emerald-900/5 px-8 py-4 grid grid-cols-5 gap-4">
             {["Reference", "Date", "Reason", "Variance", "Action"].map((head) => (
                <span key={head} className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40">
                    {head}
                </span>
             ))}
          </div>

          {/* Empty State */}
          <div className="p-20 flex flex-col items-center justify-center text-center">
            <div className="bg-emerald-50 p-8 rounded-full mb-6">
                <PackageSearch size={48} className="text-emerald-900/10" />
            </div>
            <h3 className="text-xl font-black uppercase italic text-[#064e3b] mb-2">No adjustments recorded</h3>
            <p className="max-w-xs text-sm font-medium text-emerald-900/40 leading-relaxed mb-8">
              Inventory levels are currently synced with the master database. 
              Manual overrides will appear here.
            </p>
            
            <button className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 hover:text-emerald-900 transition-colors flex items-center gap-2">
                View Audit History <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Footer Identifier */}
        <p className="mt-10 text-center text-[9px] font-black uppercase tracking-[0.5em] text-emerald-900/20">
          Inventory Reconciliation Module — Ishabella v2.0
        </p>
      </div>
    </div>
  );
}