"use client";
import React from "react";
import { History, Target, Eye, Award, Globe, Warehouse, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const milestones = [
    { year: "2015", event: "Launched as a mobile retail unit in Batangas and Laguna with a vision to redefine HVACR reliability.", ref: "Redefining Reliability" },
    { year: "2017", event: "Expanded operations to Cavite and Bulacan; established JJCAR Engineering in Bacolod.", ref: "Strategic Growth" },
    { year: "2021", event: "Established PILI-Aire in San Pedro, Laguna to strengthen Southern Luzon presence.", ref: "Market Expansion" },
    { year: "2023", event: "Officially appointed as an Authorized Dealer for Daikin Philippines.", ref: "Global Standards" },
    { year: "2025", event: "Became the exclusive Philippine distributor for Sunnix Energy and Yinergy global solar leaders.", ref: "Energy Transformation" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* BRAND STORY HERO - Forest Green Theme */}
      <section className="relative py-32 px-6 bg-[#064e3b] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 skew-x-12 translate-x-32" />
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="text-emerald-400 font-black tracking-[0.3em] text-xs uppercase italic">Established 2015</span>
          <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter mt-4 mb-8 leading-none">
            Built Relentless. <br /> 
            <span className="text-emerald-400 underline decoration-4 underline-offset-8">Led by Faith.</span>
          </h1>
          <p className="max-w-2xl text-emerald-50/80 text-lg leading-relaxed font-medium">
              ISHABELLA CORP stands on strength, discipline, and unwavering faith.

           Like the honey badger, we move forward without fear — resilient under pressure, strategic in action, and relentless in pursuit of excellence. But our true foundation is deeper than strength alone.

           We believe courage comes from conviction.

           We believe leadership requires integrity.

           We believe success is built with purpose.

           We do not retreat from challenges.

           We confront them with faith, wisdom, and disciplined execution.
          </p>
        </div>
      </section>

      {/* MISSION & VISION - Emerald & Forest Palette */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 -mt-12 relative z-20">
        <div className="bg-white p-12 rounded-[40px] border-2 border-emerald-100 shadow-xl relative overflow-hidden group">
          <div className="absolute -right-6 -bottom-6 text-emerald-50 group-hover:text-emerald-100 transition-colors">
            <Eye size={160} />
          </div>
          <h2 className="text-2xl font-black text-[#064e3b] italic mb-4 relative z-10 uppercase tracking-tighter">Our Vision</h2>
          <p className="text-slate-600 leading-relaxed font-bold relative z-10">
            To redefine reliability within the HVACR supply chain and drive the Philippines toward a cleaner, 
            more sustainable future through international engineering.
          </p>
        </div>

        <div className="bg-[#064e3b] p-12 rounded-[40px] shadow-2xl relative overflow-hidden group">
          <div className="absolute -right-6 -bottom-6 text-emerald-400/10 group-hover:text-emerald-400/20 transition-colors">
            <Target size={160} />
          </div>
          <h2 className="text-2xl font-black text-emerald-400 italic mb-4 relative z-10 uppercase tracking-tighter">Our Commitment</h2>
          <p className="text-emerald-50/90 leading-relaxed font-bold relative z-10">
            A fanatical commitment to trusted, high-performance service. Ensuring high-quality automotive 
            and home cooling components are accessible nationwide.
          </p>
        </div>
      </section>

      {/* ORGANIZATIONAL CHART - Clean Green Accents */}
      <section className="bg-emerald-50/30 py-24 px-6 border-y border-emerald-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-emerald-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800">Ishabella Structure</span>
          </div>
          <h2 className="text-4xl font-black text-[#064e3b] italic mb-12 uppercase tracking-tighter">
            Organizational <span className="text-emerald-500">Chart</span>
          </h2>
          <div className="relative bg-white p-4 md:p-8 rounded-[48px] shadow-2xl border border-emerald-100 overflow-hidden group">
            <img 
              src="/images/Org chart.png" 
              alt="Ishabella Corp Organizational Chart" 
              className="w-full h-auto rounded-3xl object-contain mx-auto shadow-sm transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <p className="mt-8 text-[11px] font-black text-emerald-800 uppercase tracking-widest italic opacity-60">
              Empowering our workforce from leadership to logistics
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS & DELIVERIES - Updated to Forest Green Labels */}
      <section className="py-24 px-6 bg-white flex flex-col items-center">
        <div className="mb-16 text-center space-y-2">
          <span className="text-emerald-600 font-black tracking-[0.3em] text-[10px] uppercase italic">Real-World Impact</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#064e3b] italic uppercase tracking-tighter">
            Projects & <span className="text-emerald-500">Deliveries</span>
          </h2>
          <p className="text-slate-400 font-bold text-xs max-w-sm italic mt-4 mx-auto">
            Actual documentation of our nationwide operations and technical installations.
          </p>
        </div>

        <div className="w-full max-w-7xl bg-[#064e3b] rounded-[40px] p-6 md:p-12 shadow-2xl border border-emerald-900/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
              <div key={id} className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-emerald-800/50 group bg-[#042f24]">
                <img 
             src={"/images/logo2.jpg"}
                  alt="Delivery Proof"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 text-[#064e3b] font-black text-xl uppercase italic tracking-tight">
          A/C Materials deliveries
        </p>
      </section>

      {/* EVOLUTION TIMELINE - Integrated Emerald Colors */}
      <section className="py-24 px-6 bg-emerald-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px flex-1 bg-emerald-200" />
            <h2 className="text-2xl font-black text-[#064e3b] uppercase tracking-widest">Our Evolution</h2>
            <div className="h-px flex-1 bg-emerald-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {milestones.map((m, i) => (
              <div key={i} className="p-8 border-l-4 border-emerald-500 bg-white hover:shadow-2xl transition-all group rounded-r-3xl">
                <span className="text-4xl font-black text-emerald-100 group-hover:text-emerald-200 transition-colors italic block mb-2">{m.year}</span>
                <h4 className="font-black text-[10px] text-emerald-600 uppercase tracking-widest mb-3">{m.ref}</h4>
                <p className="text-xs text-slate-500 font-bold leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 px-6 bg-[#064e3b]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 text-center">
          {[
            { icon: <Globe size={40} />, val: "15+", label: "Provinces Covered" },
            { icon: <Warehouse size={40} />, val: "WAREHOUSE", label: "Advanced Supply Chain" },
            { icon: <Award size={40} />, val: "EXCLUSIVE", label: "Authorized Distributor" }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-emerald-400 mb-6">{stat.icon}</div>
              <h3 className="text-4xl font-black text-white mb-2 italic tracking-tighter">{stat.val}</h3>
              <p className="text-emerald-300/60 font-black uppercase text-[10px] tracking-[0.3em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}