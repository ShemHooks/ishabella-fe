"use client";

import React from "react";
import { 
  ArrowLeftRight, 
  Plus, 
  Box, 
  MapPin, 
  History,
  Truck,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TransfersPage() {
  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 mb-2">
              <Truck size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Logistics Pipeline</span>
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tighter text-[#064e3b]">
              Warehouse Transfers
            </h1>
          </div>
          
          <Button className="bg-[#064e3b] hover:bg-emerald-600 text-white px-8 py-6 rounded-xl font-black uppercase tracking-widest text-[11px] shadow-lg transition-all active:scale-95 flex items-center gap-3">
            <Plus size={18} strokeWidth={3} />
            New Transfer Protocol
          </Button>
        </div>

        {/* Dashboard Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-emerald-900/5 p-6 rounded-2xl shadow-sm">
                <p className="text-[9px] font-black uppercase text-emerald-900/30 tracking-[0.2em] mb-2">Active Shipments</p>
                <p className="text-2xl font-black text-emerald-900">0</p>
            </div>
            <div className="bg-white border border-emerald-900/5 p-6 rounded-2xl shadow-sm">
                <p className="text-[9px] font-black uppercase text-emerald-900/30 tracking-[0.2em] mb-2">Pending Arrival</p>
                <p className="text-2xl font-black text-emerald-900">0</p>
            </div>
            <div className="bg-emerald-900 p-6 rounded-2xl shadow-lg flex items-center justify-between">
                <div>
                    <p className="text-[9px] font-black uppercase text-emerald-400 tracking-[0.2em] mb-1">Pipeline Status</p>
                    <p className="text-xs font-bold text-white uppercase">All Systems Clear</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-3xl shadow-2xl border border-emerald-900/5 overflow-hidden">
          {/* Table Shell Header */}
          <div className="bg-emerald-50/50 border-b border-emerald-900/5 px-8 py-5 grid grid-cols-5 gap-4">
             {["Reference ID", "Source", "Destination", "Status", "Timestamp"].map((head) => (
                <span key={head} className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40">
                    {head}
                </span>
             ))}
          </div>

          {/* Empty State */}
          <div className="p-24 flex flex-col items-center justify-center text-center">
            <div className="relative mb-6">
                <div className="absolute inset-0 bg-emerald-100 rounded-full scale-150 blur-2xl opacity-50" />
                <div className="relative bg-emerald-50 p-6 rounded-full">
                    <ArrowLeftRight size={40} className="text-emerald-900/20" />
                </div>
            </div>
            <h3 className="text-xl font-black uppercase text-[#064e3b] mb-2">No active transfers</h3>
            <p className="max-w-xs text-sm font-medium text-emerald-900/40 leading-relaxed mb-8">
              There are currently no assets in transit between registered warehouse facilities.
            </p>
            
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 hover:text-emerald-900 transition-colors group">
                <History size={14} /> View Archived Transfers <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Footer Identifier */}
        <p className="mt-10 text-center text-[9px] font-black uppercase tracking-[0.5em] text-emerald-900/20">
          Ishabella Logistics — Intra-Warehouse Movement Protocol
        </p>
      </div>
    </div>
  );
}