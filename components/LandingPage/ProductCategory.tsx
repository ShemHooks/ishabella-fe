'use client';

import React, { useState, useEffect } from 'react';
import { productCategoryLP } from '@/server/api/landingPage';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const ProductCategory = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const router = useRouter();

  const getCategories = async () => {
    const res = await productCategoryLP();
    setCategories(res.data.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className="py-12 px-7 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-black text-[#064e3b] uppercase tracking-tighter">
            Product Categories
          </h2>
          <button
            className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-emerald-600 hover:text-[#064e3b] transition-colors"
            onClick={() => router.push('/screen/auth')}
          >
            View All
            <ArrowRight size={16} />
          </button>
        </div>

        {/* FLEX WRAP (centers last row automatically) */}
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer w-full sm:w-[48%] lg:w-[30%]">
              <div className="relative aspect-[16/14 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col items-center justify-between transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:border-emerald-500">
                <div className="w-full bg-slate-50 py-4 text-center border-t border-slate-100">
                  <span className="text-[#064e3b] font-bold text-lg tracking-wide uppercase">
                    {category.name}
                  </span>
                </div>
              </div>

              {/* Hover Line Effect */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
