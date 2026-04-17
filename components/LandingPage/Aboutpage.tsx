import React from "react";
import { Facebook, Instagram, ShieldCheck, Zap, MessageSquare } from "lucide-react";

const AboutPage = () => {
  return (
    /* Reduced vertical padding from pt-20/pb-10 to pt-12/pb-8 for a tighter box feel */
    <footer className="bg-slate-200 pt-12 pb-8 px-6 text-white relative overflow-hidden">
      {/* Subtle Grounded energy line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500/30" />
      
      {/* Reduced max-width to 6xl to bring content closer together */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Reduced margin-bottom from mb-20 to mb-12 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* THE ISHABELLA MANIFESTO */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Adjusted logo height for better proportion */}
            <img src="/images/logo.png" alt="Ishabella" className="h-28 w-auto object-contain self-start" />
            
            <div className="space-y-1">
              <p className="text-xl font-black  uppercase tracking-tighter text-emerald-400">Fearless in action.</p>
              <p className="text-xl font-black  uppercase tracking-tighter text-black">Grounded in faith.</p>
              <p className="text-xl font-black  uppercase tracking-tighter text-emerald-500">Relentless in execution.</p>
            </div>

            <p className="text-emerald-900/100 text-xs leading-relaxed max-w-sm font-medium border-l-2 border-emerald-800 pl-4">
              ISHABELLA CORP is a commitment to excellence in solar and cooling technology.
            </p>
          </div>

          {/* QUICK NAVIGATION */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-2">
            <div>
              <h4 className=" text-[13px] uppercase tracking-[0.3em] text-emerald-900 mb-6 ">Solutions</h4>
              <ul className="space-y-4 text-xs font-uppercase text-emerald-100/100">
                <li className="hover:text-green cursor-pointer transition-colors text-emerald-900/100">Solar Performance</li>
                <li className="hover:text-green cursor-pointer transition-colors text-emerald-900/100">Industrial Cooling</li>
                <li className="hover:text-green cursor-pointer transition-colors text-emerald-900/100">Energy Storage</li>
              </ul>
            </div>
            <div>
              <h4 className=" text-[13px] uppercase tracking-[0.3em] text-emerald-900 mb-6 ">Connect</h4>
              <ul className="space-y-4 text-xs font-uppercase text-emerald-100/100">
                <li className="flex items-center gap-2 hover:text-green cursor-pointer text-emerald-900/100"><MessageSquare size={14}/> Direct Inquiry</li>
                <li className="flex items-center gap-2 hover:text-green cursor-pointer text-emerald-900/100"><Facebook size={14}/> Facebook</li>
                <li className="flex items-center gap-2 hover:text-green cursor-pointer text-emerald-900/100"><Instagram size={14}/> Instagram</li>
              </ul>
            </div>
          </div>
        </div>

        {/* LOGISTICS & TRUST BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-emerald-500">
              <ShieldCheck size={12}/> Authorized Dealer
            </div>
            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-emerald-500">
              <Zap size={12}/> Solar Partner
            </div>
          </div>
          <p className="text-[9px] font-bold  text-emerald-900 opacity-80 tracking-widest uppercase">© 2026 ISHABELLA CORP. Execution is everything.</p>
        </div>
      </div>
    </footer>
  );
};

export default AboutPage;