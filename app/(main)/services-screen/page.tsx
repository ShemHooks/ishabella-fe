"use client";
import React from "react";
import { Snowflake, Truck, ShieldCheck, Zap, Car, Globe } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "HVACR Parts & Trading",
      icon: <Snowflake className="text-emerald-500" size={32} />,
      description: "Authorized dealer of Daikin technologies, providing high-performance air conditioning and refrigeration components.",
      features: ["Authorized Daikin Dealer", "Global Technical Support", "Precision Components"],
      color: "border-emerald-100"
    },
    {
      title: "Solar & Renewable Energy",
      icon: <Zap className="text-lime-500" size={32} />,
      description: "Exclusive Philippine distributor for Sunnix Energy storage and Yinergy high-performance solar inverters.",
      features: ["Sunnix Exclusive Distro", "Yinergy Inverters", "Sustainable Engineering"],
      color: "border-emerald-100"
    },
    {
      title: "Automotive Cooling",
      icon: <Car className="text-emerald-500" size={32} />,
      description: "Specialized supply of car aircon parts and cooling materials for automotive professionals nationwide.",
      features: ["Nationwide Parts Supply", "OEM Quality Standard", "Rapid Fulfillment"],
      color: "border-emerald-100"
    },
    {
      title: "Technical Logistics",
      icon: <Truck className="text-emerald-800" size={32} />,
      description: "Lightning-fast distribution spanning from Northern Isabela to General Santos City, reaching 15+ provinces.",
      features: ["15+ Provinces Covered", "Inventory Management", "Provincial Market Hubs"],
      color: "border-emerald-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION - Forest Green Theme */}
      <section className="bg-[#064e3b] py-24 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Globe className="absolute -right-20 -bottom-20 text-emerald-300" size={400} />
        </div>
        
        <div className="relative z-10">
          <span className="text-emerald-400 font-black tracking-widest text-xs uppercase italic">Expertise & Reliability</span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 mb-6 italic">
            OUR <span className="text-emerald-400 underline decoration-4 underline-offset-8">SERVICES</span>
          </h1>
          <p className="max-w-2xl mx-auto text-emerald-100/80 font-medium leading-relaxed">
            Bridging the gap between deep technical expertise and lightning-fast logistics since 2015.
          </p>
        </div>
      </section>

      {/* CORE SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-[40px] border-2 ${service.color} hover:border-emerald-500 hover:shadow-2xl transition-all group hover:-translate-y-2 bg-white`}
            >
              <div className="mb-6 bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-black text-emerald-900 mb-4 uppercase tracking-tighter italic">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 h-20">
                {service.description}
              </p>
              <ul className="space-y-4">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-[10px] font-black text-emerald-800 uppercase tracking-wider">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERSHIP HIGHLIGHT - Forest Green & White */}
      <section className="bg-emerald-50/50 py-24 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[40px] p-8 md:p-16 shadow-sm border border-emerald-100 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="text-emerald-600 font-black tracking-[0.2em] text-[10px] uppercase">Strategic Milestone 2025</span>
            <h2 className="text-4xl font-black text-[#064e3b] mt-3 mb-6 italic tracking-tighter uppercase">Exclusivity in Energy</h2>
            <p className="text-slate-600 leading-relaxed mb-8 font-medium">
              Ishabella is now the **exclusive Philippine distributor** for Sunnix Energy & Yinergy, delivering world-class renewable energy solutions.
            </p>
            <button className="bg-[#064e3b] text-white px-10 py-4 rounded-full font-black text-sm hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/10">
              INQUIRE SOLAR SOLUTIONS
            </button>
          </div>
          
          {/* Partner Logo Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            {[
              { name: "DAIKIN", color: "text-emerald-600" },
              { name: "SUNNIX", color: "text-emerald-500" },
              { name: "YINERGY", color: "text-emerald-900" },
              { name: "PILI-AIRE", color: "text-[#064e3b]" }
            ].map((partner, pIdx) => (
              <div key={pIdx} className="h-32 bg-emerald-50/50 rounded-[30px] border border-emerald-100 flex items-center justify-center group hover:bg-white hover:shadow-md transition-all">
                <span className={`font-black italic tracking-tighter ${partner.color} opacity-60 group-hover:opacity-100 transition-opacity`}>
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}