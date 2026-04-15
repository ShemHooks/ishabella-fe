"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Save, 
  Trash2, 
  ShieldAlert, 
  BadgeCheck, 
  MapPin, 
  Calendar,
  Wallet
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ViewEmployeePage() {
  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header with Navigation */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Link href="/admin/employee" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 transition-colors mb-4">
              <ArrowLeft size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">Personnel Registry</span>
            </Link>
            <div className="flex items-center gap-4">
              <h1 className="text-5xl font-black uppercase  tracking-tighter text-[#064e3b]">
                User
              </h1>
              <div className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-emerald-500/20">
                Active
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-rose-500/20 text-rose-600 hover:bg-rose-50 rounded-xl transition-all font-black uppercase text-[10px] tracking-widest">
              <Trash2 size={16} /> Terminate Access
            </button>
            <Button className="flex items-center gap-2 bg-[#064e3b] hover:bg-emerald-800 text-white px-8 py-3 rounded-xl font-blac k uppercase text-[10px] tracking-widest shadow-xl shadow-emerald-900/20">
              <Save size={16} /> Commit Changes
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Tactical Overview */}
          <div className="space-y-6">
            <div className="bg-emerald-950 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
              <BadgeCheck className="absolute -right-6 -bottom-6 w-32 h-32 text-white/5 -rotate-12" />
              
              <div className="relative z-10">
                <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Security Clearance</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-[10px] font-bold text-white/50 uppercase">ID Code</span>
                    <span className="font-mono font-black text-sm">IBX-2026-042</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-[10px] font-bold text-white/50 uppercase">Deployment</span>
                    <span className="font-black text-xs uppercase tracking-wider">Field Operations</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-white/50 uppercase">Last Sync</span>
                    <span className="font-black text-xs uppercase tracking-wider">2 Hours Ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-emerald-900/10 flex items-start gap-4">
              <ShieldAlert className="text-amber-500 shrink-0" size={24} />
              <p className="text-[9px] font-bold text-emerald-900/60 uppercase leading-relaxed">
                Modification of financial records or access levels requires secondary authorization from the Chief Administrator.
              </p>
            </div>
          </div>

          {/* Right Column: Editable Data Blocks */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Field: Identification */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-emerald-900/5">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-900/100 mb-8 flex items-center gap-2">
                <Trash2 size={14} className="text-emerald-500" /> Identity Profile
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/100 ml-1">Full Legal Name</label>
                  <input className="w-full bg-[#f8fafc] border-2 border-emerald-900/5 p-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-all font-black text-emerald-900 text-sm" defaultValue="User" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/100 ml-1">Email Address</label>
                  <input className="w-full bg-[#f8fafc] border-2 border-emerald-900/5 p-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-all font-bold text-emerald-900 text-sm" defaultValue="email@mail.com" />
                </div>
              </div>
            </div>

            {/* Field: Logistics & Compensation */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-emerald-900/5">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-900/100 mb-8 flex items-center gap-2">
                <Wallet size={14} className="text-emerald-500" /> Operational Specs
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/100 ml-1">Role Type</label>
                  <select className="w-full bg-[#f8fafc] border-2 border-emerald-900/5 p-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-all font-black uppercase text-[10px] tracking-widest text-emerald-900 cursor-pointer">
                    <option>Technician</option>
                    <option>Sales Agent</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/100 ml-1">Salary Grade</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-emerald-900/50">₱</span>
                    <input type="number" className="w-full bg-[#f8fafc] border-2 border-emerald-900/5 pl-10 pr-4 py-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-all font-black text-emerald-900 text-sm" defaultValue="8000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/100 ml-1">Department</label>
                  <input className="w-full bg-[#f8fafc] border-2 border-emerald-900/5 p-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-all font-bold text-sm" defaultValue="Operations" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/100 ml-1">Position Title</label>
                  <input className="w-full bg-[#f8fafc] border-2 border-emerald-900/5 p-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-all font-bold text-sm" defaultValue="Installer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-[9px] font-black uppercase tracking-[0.5em] text-emerald-900/70">
          AUTHORIZED PERSONNEL DATA ACCESS — SYSTEM LOGGED
        </p>
      </div>
    </div>
  );
}