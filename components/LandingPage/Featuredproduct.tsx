import React from "react";
import { ShoppingCart, Star, ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "SolarMax Ultra 500W High Efficiency",
    category: "SOLAR PANELS",
    price: 21500,
    oldPrice: 25000,
    rating: 4.8,
    reviews: 124,
    image: "/images/solar-panel.png", // Ensure path matches your public folder
    discount: "-14%",
    tag: "Best Seller!",
  },
  {
    id: 2,
    name: "SolarMax Ultra 500W High Efficiency",
    category: "SOLAR PANELS",
    price: 21500,
    oldPrice: 25000,
    rating: 4.8,
    reviews: 124,
    image: "/images/solar-panel.png", // Ensure path matches your public folder
    discount: "-14%",
    tag: "Best Seller!",
  },
  {
    id: 3,
    name: "SolarMax Ultra 500W High Efficiency",
    category: "SOLAR PANELS",
    price: 21500,
    oldPrice: 25000,
    rating: 4.8,
    reviews: 124,
    image: "/images/solar-panel.png", // Ensure path matches your public folder
    discount: "-14%",
    tag: "Best Seller!",
  },
  {
    id: 4,
    name: "SolarMax Ultra 500W High Efficiency",
    category: "SOLAR PANELS",
    price: 21500,
    oldPrice: 25000,
    rating: 4.8,
    reviews: 124,
    image: "/images/solar-panel.png", // Ensure path matches your public folder
    discount: "-14%",
    tag: "Best Seller!",
  },
  // ... copy the same structure for other products
];

const Featuredproduct = () => {
  return (
    <section className=" py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-[#0A3D62] tracking-tighter uppercase italic">
              Featured Products
            </h2>
            <p className="text-slate-500 mt-2 font-medium">
              High-performance energy solutions trusted by thousands.
            </p>
          </div>

          <button className="group flex items-center gap-2 text-[#0A3D62] font-black text-xs uppercase tracking-widest hover:text-cyan-500 transition-colors">
            View Full Catalog
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Product Grid - Improved Horizontal Scroll + Grid */}
        <div
          className="flex gap-8 overflow-x-auto pb-10 px-2 snap-x snap-mandatory 
                        scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible"
        >
          {products.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="min-w-[300px] snap-center group flex flex-col bg-white rounded-[40px] 
                         overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl 
                         transition-all duration-500"
            >
              {/* Image Section - Light Grey Area */}
              <div className="relative aspect-[4/5] bg-[#F1F5F9] p-10 flex items-center justify-center overflow-hidden">
                {product.tag && (
                  <span
                    className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm border border-slate-100 
                                   text-[#0A3D62] text-[10px] font-black px-3 py-1 rounded-full shadow-sm z-10"
                  >
                    {product.tag}
                  </span>
                )}

                <span
                  className="absolute top-6 right-6 bg-red-500 text-white text-[10px] font-black 
                                 px-2 py-1 rounded-lg z-10 shadow-sm"
                >
                  {product.discount}
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Info Section - Dark Navy Overlap Area */}
              <div className="p-8 bg-[#0A3D62] text-white rounded-t-[40px] -mt-10 relative z-10 flex-1 flex flex-col">
                <span className="text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase mb-2">
                  {product.category}
                </span>

                <h3 className="font-bold text-lg leading-tight mb-4 group-hover:text-cyan-100 transition-colors h-12 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-6">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-black">{product.rating}</span>
                  <span className="text-slate-400 text-[10px]">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black italic">
                        ₱{product.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-green-400 text-[10px] font-black uppercase tracking-widest mt-1">
                      ● In Stock
                    </p>
                  </div>

                  <button
                    className="bg-cyan-400 text-[#0A3D62] p-4 rounded-2xl hover:bg-white 
                                   transition-all active:scale-90 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featuredproduct;
