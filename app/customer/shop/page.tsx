'use client';

import React, { useState, useEffect } from 'react';
import {
  Search,
  Star,
  ShoppingCart,
  Truck,
  ShieldCheck,
  Zap,
  Filter,
  ArrowRight,
  Terminal,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { getProductListing } from '@/server/api/products';
import { useDebounce } from '@/utils/useDebounce';
import { useSearch } from '@/utils/context/SearchContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ShopPage() {
  const { keyword, category } = useSearch();
  const debouncedKeyword = useDebounce(keyword, 500);

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const getProductLists = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await getProductListing(debouncedKeyword?.trim() || '', category || '');

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
    getProductLists();
  }, [debouncedKeyword, category]);

  const handleBuyNow = (e: React.MouseEvent, product: any) => {
    e.preventDefault(); // 🚫 stop Link navigation
    e.stopPropagation();

    const item = [
      {
        id: product.id,
        name: product.name,
        price: Number(product.price),
        quantity: 1,
        stock: product.stock_quantity,
        image: product.product_photo?.[0]?.url || null,
      },
    ];

    localStorage.setItem('checkout_items', JSON.stringify(item));

    router.push('/customer/order');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="bg-white border-b border-emerald-50 sticky top-0 z-50">
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
              <Link
                key={product.id}
                href={`/customer/shop/${product.id}`}
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
                      onClick={(e) => handleBuyNow(e, product)}
                      className="mt-3 sm:mt-4 w-full flex items-center justify-center gap-2 bg-[#064e3b] hover:bg-emerald-700 text-white py-2 sm:py-3 rounded-xl font-black uppercase text-[10px] sm:text-xs tracking-widest transition-all shadow-md active:scale-95"
                    >
                      <ShoppingCart size={14} />
                      Buy Now
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
