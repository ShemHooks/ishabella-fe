"use client";

import React from "react";
import Aurora from "../effects/Aurora";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100dvh-80px)] w-full overflow-hidden flex items-center justify-center">
      S{" "}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#22C55E", "#06B6D4", "#67E8F9", "#F0F9FF"]}
          speed={0.8}
          amplitude={0.7}
          blend={1}
        />
      </div>
      <div className="absolute inset-0 bg-black/40 -z-10" />
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center gap-8">
        <div className="border border-white/30 backdrop-blur-sm px-5 py-2 rounded-full">
          <p className="text-xs sm:text-sm uppercase tracking-widest">
            Authorized Dealer • Nationwide Service
          </p>
        </div>

        <h1
          className="font-bold leading-tight 
          text-3xl 
          sm:text-4xl 
          md:text-5xl 
          lg:text-6xl"
        >
          Powering Your Comfort with Smart Cooling & Solar Solutions
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl">
          HVACR Parts, Solar Systems, Installation & Nationwide Logistics
        </p>

        <Button className="mt-4 px-8 py-6 text-lg font-semibold rounded-xl bg-cyan-400 text-black hover:text-white">
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
