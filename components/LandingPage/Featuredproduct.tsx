'use client';
import React, { useState, useEffect } from 'react';
import { ShoppingCart, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { featuredProductLP } from '@/server/api/landingPage';
import { redirect } from 'next/navigation';

export default function Featuredproduct() {
  const [products, setProducts] = useState<any[]>([]);
  const router = useRouter();

  const getFeaturedProducts = async () => {
    const res = await featuredProductLP();
    setProducts(res.data.data);
  };

  useEffect(() => {
    getFeaturedProducts();
  }, []);

  const redirect = () => {
    router.push('screen/auth');
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black text-[#064e3b] uppercase tracking-tighter">
              Featured Products
            </h2>
            <p className="text-gray-500 font-medium">
              Your One-Stop Shop for Solar Parts & Expert Installation.
            </p>
          </div>

          <button
            className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-emerald-600 hover:text-[#064e3b] transition-colors"
            onClick={redirect}
          >
            View All
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Product Grid */}
        <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 no-scrollbar">
          {products.map((product) => {
            const photos = product.product_photo || [];

            return (
              <div
                key={product.id}
                className="min-w-[80%] sm:min-w-[60%] lg:min-w-0 snap-center bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative bg-slate-50 h-56 overflow-hidden">
                  <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full z-10">
                    Best Seller
                  </span>

                  {/* SLIDER */}
                  <div
                    id={`slider-${product.id}`}
                    className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
                  >
                    {photos.length > 0 ? (
                      photos.map((photo: any, index: number) => {
                        const imageUrl = `${process.env.NEXT_PUBLIC_API_URL}/storage/${photo.url}`;

                        return (
                          <img
                            key={index}
                            src={imageUrl}
                            alt={product.name}
                            className="w-full h-full object-contain flex-shrink-0 snap-center"
                          />
                        );
                      })
                    ) : (
                      <img
                        src="/placeholder.png"
                        alt="No image"
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>

                  {/* LEFT BUTTON (desktop only) */}
                  {photos.length > 1 && (
                    <button
                      onClick={() => {
                        const el = document.getElementById(`slider-${product.id}`);
                        if (!el) return;
                        const slideWidth = el.clientWidth;
                        el.scrollBy({ left: -slideWidth, behavior: 'smooth' });
                      }}
                      className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow p-2 rounded-full "
                    >
                      <ChevronLeft size={18} />
                    </button>
                  )}

                  {/* RIGHT BUTTON (desktop only) */}
                  {photos.length > 1 && (
                    <button
                      onClick={() => {
                        const el = document.getElementById(`slider-${product.id}`);
                        if (!el) return;
                        const slideWidth = el.clientWidth;
                        el.scrollBy({ left: slideWidth, behavior: 'smooth' });
                      }}
                      className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow p-2 rounded-full "
                    >
                      <ChevronRight size={18} />
                    </button>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="text-sm font-bold text-[#064e3b] mb-3 line-clamp-2 uppercase tracking-tight">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-emerald-600">
                      ₱{Number(product.price).toLocaleString()}
                    </span>
                  </div>

                  <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-widest">
                    {product.sold ?? 0} sold
                  </p>

                  <button
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-[#064e3b] hover:bg-emerald-700 text-white py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-all shadow-md active:scale-95"
                    onClick={redirect}
                  >
                    <ShoppingCart size={16} />
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
