"use client";

import React from "react";
import { 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  BarChart3, 
  ArrowUpRight, 
  ArrowDownRight,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";

const reports= () => {
  // Mock data derived from your Excel logic (Index/Sales Data)
  const metrics = [
    { label: "Annual Sales Progress", value: "₱12.4M", target: "₱40.5M", trend: "+12%", color: "emerald" },
    { label: "Total Collectibles", value: "₱1,794,809", sub: "Action Required", trend: "+5%", color: "rose" },
    { label: "Net Mark Up (MTD)", value: "₱527,879", sub: "Above Forecast", trend: "+8%", color: "emerald" },
  ];

  const agentPerformance = [
    { name: "Bro Mel", sales: "₱136,004", comm: "₱27,200", status: "Top Performer" },
    { name: "Bro Rocky", sales: "₱73,577", comm: "₱14,715", status: "On Track" },
    { name: "Ptr. Rod", sales: "₱141,970", comm: "₱28,394", status: "Top Performer" },
  ];

  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-4xl font-black uppercase  tracking-tighter ">Reports</h1>
            <p className="text-emerald-800/60 font-bold text-xs uppercase tracking-widest">Grounded Data. Strategic Action.</p>
          </div>
          <Button className="bg-[#064e3b] hover:bg-emerald-700 text-white flex items-center gap-2 font-black uppercase text-[10px] tracking-widest px-6 py-5 rounded-xl">
            <Download size={16} /> Export record for Documentation
          </Button>
        </div>

        {/* Top Tier Metrics (Telemetry Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {metrics.map((m, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-xl border-b-4 border-emerald-900/5 group hover:border-emerald-500 transition-all">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40">{m.label}</span>
                <span className={`p-1 rounded-md ${m.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                  {m.color === 'emerald' ? <ArrowUpRight size={16}/> : <AlertTriangle size={16}/>}
                </span>
              </div>
              <h2 className="text-3xl font-black text-emerald-950 tracking-tighter mb-1">{m.value}</h2>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-black uppercase ${m.color === 'emerald' ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {m.target ? `Target: ${m.target}` : m.sub}
                </span>
              </div>
              
              {/* Progress Bar for Sales */}
              {m.target && (
                <div className="mt-4 h-2 w-full bg-emerald-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[30%]" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Agent Deployment Table */}
          <div className="bg-white rounded-2xl shadow-xl border border-emerald-900/5 overflow-hidden">
            <div className="p-6 border-b border-emerald-900/5 flex justify-between items-center bg-emerald-50/30">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#064e3b] flex items-center gap-2">
                <Users size={18} /> Field Deployment
              </h3>
            </div>
            <div className="p-0">
              <table className="w-full text-left">
                <thead className="bg-[#064e3b] text-white">
                  <tr>
                    <th className="p-4 text-[10px] font-black uppercase tracking-widest">Agent</th>
                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-right">Running Sales</th>
                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-right">Commission</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-900/5">
                  {agentPerformance.map((agent, i) => (
                    <tr key={i} className="hover:bg-emerald-50/30 transition-colors">
                      <td className="p-4">
                        <span className="block text-sm font-black text-emerald-900">{agent.name}</span>
                        <span className="text-[9px] font-bold text-emerald-500 uppercase">{agent.status}</span>
                      </td>
                      <td className="p-4 text-right font-mono font-bold text-gray-600">{agent.sales}</td>
                      <td className="p-4 text-right font-mono font-black text-emerald-700">{agent.comm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Monthly Trend Visual (Place-holder for Chart) */}
          <div className="bg-[#064e3b] rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-emerald-400 mb-8 flex items-center gap-2">
                <TrendingUp size={18} /> Market Trajectory
              </h3>
              
              {/* Abstract blocky chart to represent "Relentless" growth */}
              <div className="flex items-end gap-2 h-40">
                {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-emerald-500/20 border-t-2 border-emerald-400/50 hover:bg-emerald-400 transition-all cursor-pointer" style={{ height: `${h}%` }} />
                ))}
              </div>
              
              <div className="flex justify-between mt-4 text-[10px] font-black uppercase text-emerald-400/50">
                <span>JAN</span>
                <span>APR</span>
                <span>JUL</span>
                <span>OCT</span>
                <span>DEC</span>
              </div>
            </div>

            {/* Background Graphic */}
            <BarChart3 className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 rotate-12" />
          </div>

        </div>

        <p className="mt-10 text-center text-[9px] font-black uppercase tracking-[0.5em] text-emerald-900/20">
          Authorized Access Only — Ishabella Intelligence System v2
        </p>
      </div>
    </div>
  );
};

export default reports;