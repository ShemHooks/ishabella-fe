"use client";

import React from "react";
import Link from "next/link";
import { 
  UserPlus, 
  ArrowLeft, 
  User, 
  Mail, 
  Briefcase, 
  Activity,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CreateEmployeePage() {
  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header & Back Action */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Link href="/admin/employee" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 transition-colors mb-2">
              <ArrowLeft size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">Return to Employee Section</span>
            </Link>
            <h1 className="text-4xl font-black uppercase italic tracking-tighter text-[#064e3b]">
              New Asset Onboarding
            </h1>
          </div>
          <div className="bg-emerald-100 px-4 py-2 rounded-lg flex items-center gap-3 border border-emerald-200">
             <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">System Ready</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Form Area */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Section 1: Identity */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-emerald-900/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500" />
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-900/100 mb-8 flex items-center gap-2">
                <User size={14} className="text-emerald-500" /> Personal Identity
              </h3>
              
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/100 ml-1">Full Legal Name</label>
                  <input className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 p-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-all font-bold text-sm text-emerald-900 placeholder:text-emerald-900/50" placeholder="e.g. Juan Dela Cruz" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/100 ml-1">Contact Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900/20" size={18} />
                    <input type="email" className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-all font-bold text-sm text-emerald-900 placeholder:text-emerald-900/50" placeholder="name@mail.com" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Position Details */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-emerald-900/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500" />
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-900/100 mb-8 flex items-center gap-2">
                <Briefcase size={14} className="text-emerald-500" /> Operational Deployment
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/100 ml-1">Department / Unit</label>
                  <input className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 p-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-all font-bold text-sm text-emerald-900 placeholder:text-emerald-900/50" placeholder="e.g. Operations - Field Team" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/100 ml-1">Role Designation</label>
                  <select className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 p-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-all font-black uppercase text-[10px] tracking-widest text-emerald-900 cursor-pointer appearance-none">
                    <option>Technician</option>
                    <option>Sales Agent</option>
                    <option>Accountant</option>
                    <option>Inventory Manager</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/100 ml-1">Monthly Salary (Base)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-emerald-900/20">₱</span>
                    <input type="number" className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 pl-10 pr-4 py-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-all font-bold text-sm text-emerald-900" placeholder="0.00" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Area: Action Control */}
          <div className="space-y-6">
            <div className="bg-[#064e3b] p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden">
              <CheckCircle2 className="absolute -right-4 -bottom-4 w-24 h-24 text-white/5 rotate-12" />
              
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-6 flex items-center gap-2">
                Execution
              </h3>

              <div className="space-y-6">
                <p className="text-[10px] font-bold text-emerald-100/60 uppercase leading-relaxed">
                  Confirm all operational details before deployment. This will register the asset into the active payroll and registry.
                </p>

                <Button className="w-full bg-emerald-500 hover:bg-white hover:text-[#064e3b] text-white p-8 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 group">
                  <UserPlus size={18} className="group-hover:scale-110 transition-transform" /> 
                  Confirm & Deploy
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-emerald-900/10 flex items-start gap-4">
              <Activity size={20} className="text-emerald-500 shrink-0" />
              <p className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 leading-tight">
                Onboarding triggers real-time updates across all administrative modules.
              </p>
            </div>
          </div>

        </div>

        <p className="mt-12 text-center text-[9px] font-black uppercase tracking-[0.5em] text-emerald-900/20">
          AUTHORIZED DATA ENTRY — ISHABELLA HCM v2.0
        </p>
      </div>
    </div>
  );
}