"use client";
import React from "react";
import AboutPage from "../../../components/LandingPage/Aboutpage";
import {
  Search,
  Star,
  ShoppingCart,
  Truck,
  CreditCard,
  Flame,
} from "lucide-react";

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "170W Monocrystalline Solar Panel High Performance",
      price: 1300,
      oldPrice: 1500,
      rating: 4.8,
      sold: "8,000+",
      badge: "Best Seller",
      discount: "-14%",
      image: "/images/solar-panel.png",
    },
    {
      id: 2,
      name: "Complete 1kW Home Solar Kit Complete Package",
      price: 49000,
      oldPrice: 56300,
      rating: 4.9,
      sold: "5,300+",
      badge: "Bundle Save",
      discount: "-35%",
      image: "/images/solar-kit.png",
    },
    {
      id: 3,
      name: "Complete 1kW Home Solar Kit Complete Package",
      price: 49000,
      oldPrice: 56300,
      rating: 4.9,
      sold: "5,300+",
      badge: "Bundle Save",
      discount: "-35%",
      image: "/images/solar-kit.png",
    },
    {
      id: 4,
      name: "Complete 1kW Home Solar Kit Complete Package",
      price: 49000,
      oldPrice: 56300,
      rating: 4.9,
      sold: "5,300+",
      badge: "Bundle Save",
      discount: "-35%",
      image: "/images/solar-kit.png",
    },
    {
      id: 5,
      name: "Complete 1kW Home Solar Kit Complete Package",
      price: 49000,
      oldPrice: 56300,
      rating: 4.9,
      sold: "5,300+",
      badge: "Bundle Save",
      discount: "-35%",
      image: "/images/solar-kit.png",
    },
    {
      id: 6,
      name: "Complete 1kW Home Solar Kit Complete Package",
      price: 49000,
      oldPrice: 56300,
      rating: 4.9,
      sold: "5,300+",
      badge: "Bundle Save",
      discount: "-35%",
      image: "/images/solar-kit.png",
    },
    {
      id: 7,
      name: "Complete 1kW Home Solar Kit Complete Package",
      price: 49000,
      oldPrice: 56300,
      rating: 4.9,
      sold: "5,300+",
      badge: "Bundle Save",
      discount: "-35%",
      image: "/images/solar-kit.png",
    },
    {
      id: 8,
      name: "Complete 1kW Home Solar Kit Complete Package",
      price: 49000,
      oldPrice: 56300,
      rating: 4.9,
      sold: "5,300+",
      badge: "Bundle Save",
      discount: "-35%",
      image: "/images/solar-kit.png",
    },
    {
      id: 9,
      name: "Complete 1kW Home Solar Kit Complete Package",
      price: 49000,
      oldPrice: 56300,
      rating: 4.9,
      sold: "5,300+",
      badge: "Bundle Save",
      discount: "-35%",
      image: "/images/solar-kit.png",
    },
    {
      id: 10,
      name: "Complete 1kW Home Solar Kit Complete Package",
      price: 49000,
      oldPrice: 56300,
      rating: 4.9,
      sold: "5,300+",
      badge: "Bundle Save",
      discount: "-35%",
      image: "/images/solar-kit.png",
    },
    {
      id: 11,
      name: "Complete 1kW Home Solar Kit Complete Package",
      price: 49000,
      oldPrice: 56300,
      rating: 4.9,
      sold: "5,300+",
      badge: "Bundle Save",
      discount: "-35%",
      image: "/images/solar-kit.png",
    },
    {
      id: 12,
      name: "Complete 1kW Home Solar Kit Complete Package",
      price: 49000,
      oldPrice: 56300,
      rating: 4.9,
      sold: "5,300+",
      badge: "Bundle Save",
      discount: "-35%",
      image: "/images/solar-kit.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans">
      {/* HEADER */}
      <div className="bg-white border-b border-slate-200 pt-6 pb-4 px-4 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto flex items-center gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search for Ishabella products..."
              className="w-full bg-[#F8F8F8] border border-slate-200 py-2.5 px-4 pr-12 rounded-sm text-sm focus:outline-none focus:border-green-500"
            />
            <button className="absolute right-0 top-0 bottom-0 px-5 bg-green-800 text-white rounded-r-sm hover:bg-green-900 transition-colors">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="bg-white py-2 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto flex justify-center gap-8 md:gap-16 text-[10px] md:text-xs font-bold text-slate-500">
          <div className="flex items-center gap-1.5">
            <Truck size={14} className="text-green-500" /> Free Shipping
          </div>
          <div className="flex items-center gap-1.5">
            <CreditCard size={14} className="text-green-500" /> 0% Interest
          </div>
          <div className="flex items-center gap-1.5">
            <Flame size={14} className="text-green-500" /> Mega Discount
          </div>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-sm hover:shadow-md transition-all border border-transparent hover:border-orange-500 group flex flex-col"
            >
              <div className="relative aspect-square p-2">
                <img
                  src={product.image}
                  className="w-full h-full object-contain"
                  alt={product.name}
                />
                <div className="absolute top-2 left-0 bg-[#26A17B] text-white text-[9px] px-2 py-0.5">
                  {product.badge}
                </div>
                <div className="absolute top-0 right-0 bg-[#FFE920] text-orange-600 text-[10px] font-bold px-1.5 py-1">
                  {product.discount}
                </div>
              </div>

              <div className="p-3 flex flex-col flex-1">
                <h4 className="text-xs text-slate-800 line-clamp-2 leading-tight mb-2 font-medium">
                  {product.name}
                </h4>

                <div className="mt-auto">
                  <div className="flex items-baseline gap-1">
                    <span className="text-orange-600 text-xs font-bold">₱</span>
                    <span className="text-orange-600 text-lg font-bold">
                      {product.price.toLocaleString()}
                    </span>
                    <span className="text-slate-400 text-[10px] line-through ml-1">
                      ₱{product.oldPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-1">
                    <div className="flex items-center gap-0.5">
                      <Star
                        size={10}
                        className="fill-orange-500 text-orange-500"
                      />
                      <span className="text-[10px] text-slate-600 font-bold">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-[9px] text-slate-400 uppercase">
                      {product.sold} sold
                    </span>
                  </div>

                  <button
                    className={`w-full mt-3 text-white py-2 rounded-sm text-[11px] font-bold flex items-center justify-center gap-2 transition-colors bg-green-800 hover:bg-green-900`}
                  >
                    <ShoppingCart size={14} /> BUY NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <AboutPage />
    </div>
  );
}
