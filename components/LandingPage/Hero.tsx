'use client';

import React from 'react';
import Aurora from '../effects/Aurora';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();
  return (
    <section className="relative min-h-[calc(100dvh-80px)] w-full overflow-hidden flex items-center justify-center">
      {' '}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={['#22C55E', '#055310', '#113e17', '#F0F9FF']}
          speed={0.8}
          amplitude={0.7}
          blend={1}
        />
      </div>
      
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] -z-10" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">
        
        {/* Scaled down the technical badge */}
        <div className="border border-emerald-500/30 bg-emerald-950/40 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-100">
            System Protocol • Nationwide Logistics
          </p>
        </div>

        {/* Refined Headline: Reduced from 8xl/7xl to more manageable scales */}
        <h1 className="font-black leading-[1.1] text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter">
          Powering <span className="text-emerald-500">Comfort</span> <br />
          Through <span className="text-emerald-400">Precision.</span>
        </h1>

        {/* Tightened the sub-text */}
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-emerald-100/70 max-w-lg leading-relaxed">
          Technical HVACR Components • Industrial Solar Frameworks <br className="hidden md:block" /> 
          Deployment & Nationwide Maintenance
        </p>

        <Button
          className="mt-4 px-8 py-6 text-lg font-semibold rounded-xl bg-white text-black hover:text-white"
          onClick={() => {
            router.push('/screen/auth');
          }}
        >
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;