import React from "react";

const categories = [
  { id: 1, name: "Air Units", image: "/air-unit.png" },
  { id: 2, name: "Solar Battery", image: "/solar-battery.png" },
  { id: 3, name: "Solar Battery", image: "/solar-battery.png" },
  { id: 4, name: "Solar Battery", image: "/solar-battery.png" },
];

const ProductCategory = () => {
  return (
    <section className="bg-[#F8FAFC] py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 px-2">
          <h2 className="text-3xl font-bold text-[#003358] tracking-tight">
            PRODUCT CATEGORIES
          </h2>
          <button className="text-sm font-semibold text-blue-500 hover:text-[#003358] transition-colors">
            See All
          </button>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 px-2 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
          {categories.map((category) => (
            <div key={category.id} className="min-w-[85%] sm:min-w-[45%] md:min-w-full snap-center group cursor-pointer">
              <div className="relative aspect-[16/10] bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col items-center justify-between transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:border-blue-100">
                <div className="flex-1 flex items-center justify-center p-8 w-full">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="w-full bg-slate-50 py-4 text-center border-t border-slate-100">
                  <span className="text-[#003358] font-bold text-lg tracking-wide uppercase">
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