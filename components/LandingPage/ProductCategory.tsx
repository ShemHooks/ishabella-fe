import React from "react";

const categories = [
  { id: 1, name: "Aircon Units", image: "/air-unit.png" },
  { id: 2, name: "Installation Materials for Air conditioning", image: "/solar-battery.png" },
  { id: 3, name: "Aircon, Solar and Electrical Installation", image: "/solar-battery.png" },
  { id: 4, name: "Car Aircon Parts", image: "/solar-battery.png" },
  { id: 5, name: "Electrical Materials", image: "/solar-battery.png" },
  { id: 6, name: " Lithium Battery for Solar", image: "/solar-battery.png" },
];

const ProductCategory = () => {
  return (
    <section className="py-15 px-7">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-black text-[#064e3b]  uppercase tracking-tighter">
            Product Categories
          </h2>
          <button className="text-sm font-regular hover:text-emerald-600 transition-colors">
            See All

          </button>
        </div>

        {/* CONTAINER FIX: Removed 'md:grid' to let 'flex-wrap' and 'justify-center' work properly */}
        <div className="flex flex-wrap justify-center gap-6 pb-8 px-2">
          {categories.map((category) => (
            <div
              key={category.id}
              /* CARD WIDTH FIX: Ensures 1 per row on mobile, 2 on small screens, and 4 on desktop */
              className="w-full sm:w-[45%] lg:w-[22%] group cursor-pointer"
            >
              <div className="relative aspect-[16/14 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col items-center justify-between transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:border-emerald-500">
                <div className="flex-1 flex items-center justify-center p-8 w-full">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
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