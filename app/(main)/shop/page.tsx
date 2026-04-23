'use client';
import React, { useState, useEffect } from 'react';
import AboutPage from '../../../components/LandingPage/Aboutpage';
import {
  Search,
  Star,
  ShoppingCart,
  Truck,
  ShieldCheck,
  Zap,
  Filter,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { getProductListing } from '@/server/api/products';
import { useRouter } from 'next/navigation';

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const getProductLists = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await getProductListing(keyword);
      setProducts(res?.data?.data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('No Products Found');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      getProductLists();
    }, 500);

    return () => clearTimeout(delay);
  }, [keyword]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="bg-white border-b border-emerald-50 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center gap-6">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="What are you looking for today?"
              className="w-full bg-slate-50 border-none py-4 px-12 rounded-2xl text-sm focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
            />
          </div>

          <div className="flex gap-4"></div>
        </div>

        <div className="bg-[#064e3b] py-3">
          <div className="max-w-[1200px] mx-auto flex justify-center gap-6 md:gap-12 text-[10px] font-black uppercase tracking-[0.15em] text-emerald-100">
            <div className="flex items-center gap-2">
              <Truck size={14} /> Fast Shipping
            </div>
            <div className="flex items-center gap-2 border-x border-emerald-800 px-6 md:px-12">
              <ShieldCheck size={14} /> 100% Authentic
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} /> Partner Warranty
            </div>
          </div>
        </div>

        {loading && (
          <div className="w-full h-[3px] bg-blue-100 overflow-hidden">
            <div className="h-full bg-blue-500 animate-loading-bar"></div>
          </div>
        )}
      </header>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-bold">
            {error}
          </div>
        )}

        {!loading && products.length === 0 && !error && (
          <div className="text-center py-20 text-gray-400 font-bold uppercase tracking-widest text-sm">
            No products found
          </div>
        )}

        {/* 📱 MOBILE: 2 columns, DESKTOP unchanged */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {products.map((product) => {
            const photos = product.product_photo || [];

            return (
              <div
                key={product.id}
                className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col"
              >
                {/* IMAGE */}
                <div className="relative bg-slate-50 h-40 sm:h-56 overflow-hidden">
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

                  {photos.length > 1 && (
                    <button
                      onClick={() => {
                        const el = document.getElementById(`slider-${product.id}`);
                        if (!el) return;
                        const slideWidth = el.clientWidth;
                        el.scrollBy({ left: -slideWidth, behavior: 'smooth' });
                      }}
                      className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow p-2 rounded-full"
                    >
                      <ChevronLeft size={18} />
                    </button>
                  )}

                  {photos.length > 1 && (
                    <button
                      onClick={() => {
                        const el = document.getElementById(`slider-${product.id}`);
                        if (!el) return;
                        const slideWidth = el.clientWidth;
                        el.scrollBy({ left: slideWidth, behavior: 'smooth' });
                      }}
                      className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow p-2 rounded-full"
                    >
                      <ChevronRight size={18} />
                    </button>
                  )}
                </div>

                {/* INFO (slightly tighter on mobile) */}
                <div className="p-3 sm:p-5 flex flex-col flex-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    {product.category?.name}
                  </p>

                  <h3 className="text-xs sm:text-sm font-bold text-[#064e3b] mb-2 sm:mb-3 line-clamp-2 uppercase tracking-tight">
                    {product.name}
                  </h3>

                  <div className="mt-auto">
                    <span className="text-sm sm:text-lg font-black text-emerald-600">
                      ₱{Number(product.price || 0).toLocaleString()}
                    </span>

                    <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-widest">
                      {product.stock_quantity ?? 0} in stock
                    </p>

                    <button
                      className="mt-3 sm:mt-4 w-full flex items-center justify-center gap-2 bg-[#064e3b] hover:bg-emerald-700 text-white py-2 sm:py-3 rounded-xl font-black uppercase text-[10px] sm:text-xs tracking-widest transition-all shadow-md active:scale-95"
                      onClick={() => router.push('screen/auth')}
                    >
                      <ShoppingCart size={14} className="sm:w-4 sm:h-4" />
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <AboutPage />
    </div>
  );
}
