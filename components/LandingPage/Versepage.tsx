import React from "react";
import { ChevronRight, BookOpen } from "lucide-react";

const VersePage = () => {
  return (
    <section className="relative overflow-hidden py-24 px-6 text-center min-h-[500px] flex items-center justify-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#10b981] bg-[length:400%_400%] animate-gradient-xy" />

      {/* Subtle Overlay Pattern for Texture */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
        {/* Icon with a subtle glow */}
        <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm border border-white/20 shadow-xl">
          <BookOpen size={32} className="text-emerald-400" />
        </div>

        {/* Scripture Reference - Relentless Bold Style */}
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase  text-white">
          Psalm 18:39
        </h2>

        {/* The Quote - Grounded Style */}
        <p className="text-xl md:text-2xl font-medium max-w-2xl leading-relaxed text-emerald-50">
          "You armed me with strength for battle; <br />
          You humbled my adversaries before me."
        </p>

        {/* Action Button */}
        <button className="group bg-white text-[#064e3b] px-10 mt-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-2xl">
          Learn More 
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default VersePage;