import React from "react";
import { Store, Users, Truck, ShieldCheck } from "lucide-react";

const Advert = () => {
  return (
    <div className="p-3 mb-6 mt-16 max-w-7xl mx-auto">
      
      <div className="text-center mb-10">
        <h2 className="font-black text-[#064e3b] text-4xl uppercase  tracking-tighter">
          Why Choose <span className="text-black">Ishabella?</span>
        </h2>
        <p className="text-sm text-slate-500 font-bold mt-2 max-w-lg mx-auto leading-relaxed">
          Industry-leading products backed by cutting-edge technology and
          exceptional support.
        </p>
      </div>

      
      <div className="grid grid-cols-2 gap-4 lg:flex lg:gap-6">
        
        <div className="bg-white border-2 border-emerald-50 shadow-xl h-44 lg:w-1/4 rounded-[32px] text-black flex flex-col justify-center items-center gap-3 hover:border-emerald-500 transition-all group">
          <div className="p-3 bg-emerald-50 rounded-2xl group-hover:scale-110 transition-transform">
            <Store size={32} className="text-emerald-600" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-black text-[#064e3b] text-3xl italic tracking-tighter">15</h3>
            <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Branches Nationwide</h5>
          </div>
        </div>

        
        <div className="bg-white border-2 border-emerald-50 shadow-xl h-44 lg:w-1/4 rounded-[32px] text-black flex flex-col justify-center items-center gap-3 hover:border-emerald-500 transition-all group">
          <div className="p-3 bg-emerald-50 rounded-2xl group-hover:scale-110 transition-transform">
            <Users size={32} className="text-emerald-600" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-black text-[#064e3b] text-3xl italic tracking-tighter">30+</h3>
            <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Major Clients</h5>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border-2 border-emerald-50 shadow-xl h-44 lg:w-1/4 rounded-[32px] text-black flex flex-col justify-center items-center gap-3 hover:border-emerald-500 transition-all group">
          <div className="p-3 bg-emerald-50 rounded-2xl group-hover:scale-110 transition-transform">
            <Truck size={32} className="text-emerald-600" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-black text-[#064e3b] text-3xl italic tracking-tighter">24/7</h3>
            <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Logistics Support</h5>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white border-2 border-emerald-50 shadow-xl h-44 lg:w-1/4 rounded-[32px] text-black flex flex-col justify-center items-center gap-3 hover:border-emerald-500 transition-all group">
          <div className="p-3 bg-emerald-50 rounded-2xl group-hover:scale-110 transition-transform">
            <ShieldCheck size={32} className="text-emerald-600" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-black text-[#064e3b] text-3xl italic tracking-tighter">Protected</h3>
            <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Warranty</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advert;