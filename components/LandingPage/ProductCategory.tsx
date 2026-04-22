'use client';

import React, { useState, useEffect } from 'react';
import { productCategoryLP } from '@/server/api/landingPage';
import { useRouter } from 'next/navigation';

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
    <section className="py-15 px-7">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-black text-[#064e3b]  uppercase tracking-tighter">
            Product Categories
          </h2>
          <button
            className="text-sm font-regular hover:text-emerald-600 transition-colors"
            onClick={() => router.push('/screen/auth')}
          >
            See All
          </button>
        </div>

        {/* CONTAINER FIX: Removed 'md:grid' to let 'flex-wrap' and 'justify-center' work properly */}
        <div className="flex flex-wrap justify-center gap-6 pb-8 px-2">
          {categories.map((category) => (
            <div
              key={category.id}
              /* CARD WIDTH FIX: Ensures 1 per row on mobile, 2 on small screens, and 4 on desktop */
              className="w-[45%] sm:w-[30%] md:w-[22%] group cursor-pointer"
            >
              <div className="relative aspect-[16/14 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col items-center justify-between transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:border-emerald-500">
                <div className="w-full bg-slate-50 py-4 text-center border-t border-slate-100">
                  <span className="text-[#064e3b] font-bold text-lg tracking-wide uppercase">
                    {category.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
