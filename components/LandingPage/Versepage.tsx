import React from "react";
import { ChevronRight, BookOpen } from "lucide-react";

const VersePage = () => {
  return (
    <section className="bg-emerald-800 text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {/* Cross Icon */}
        <BookOpen size={30} />

        {/* Scripture Reference */}
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
          Psalm 18:39
        </h2>

        {/* The Quote */}
        <p className="text-lg md:text-xl italic font-light max-w-2xl ">
          "You armed me with strength for battle; You humbled my adversaries
          before me."
        </p>

        {/* Sub-reminder */}
        {/* <p className="text-sm opacity-80 mb-6">
          A reminder that faith gives us strength to overcome every challenge.
        </p> */}

        {/* CTA Button */}
        <button className="bg-white text-black px-8 mt-10 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-emerald-500 transition-colors">
          Learn More <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default VersePage;
