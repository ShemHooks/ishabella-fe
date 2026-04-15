import React from "react"
import { ShoppingCart, ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "170W Monocrystalline Solar Panel",
    price: 1300,
    oldPrice: 1800,
    sold: "8,000+",
    discount: "-14%",
    image: "/panel.png",
  },
  {
    id: 2,
    name: "Complete 1kW Solar Kit",
    price: 49000,
    oldPrice: 56300,
    sold: "5,300+",
    discount: "-35%",
    image: "/kit.png",
  },
  {
    id: 3,
    name: "Microinverter 400W Grid Tie",
    price: 5800,
    oldPrice: 7500,
    sold: "1,800+",
    discount: "-17%",
    image: "/inverter.png",
  },
  {
    id: 4,
    name: "Smart Energy Pure Sine Wave Inverter",
    price: 13500,
    oldPrice: 15300,
    sold: "750+",
    discount: "-17%",
    image: "/panel2.png",
  },
]

export default function Featuredproduct() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            {/* Updated text-gray-800 to #064e3b */}
            <h2 className="text-3xl font-black text-[#064e3b] uppercase tracking-tighter">
              Featured Products
            </h2>
            <p className="text-gray-500 font-medium">
              Your One-Stop Shop for Solar Parts & Expert Installation.
            </p>
          </div>

          {/* Updated text-blue-600 to emerald-600 */}
          <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-emerald-600 hover:text-[#064e3b] transition-colors">
            View All
            <ArrowRight size={16}/>
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >

              {/* Image */}
              <div className="relative bg-slate-50 h-56 flex items-center justify-center">

                {/* Updated background to emerald-500 */}
                <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  Best Seller
                </span>

                <span className="absolute top-3 right-3 bg-yellow-300 text-red-600 text-[10px] font-black px-3 py-1 rounded-full shadow-sm">
                  {product.discount}
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 object-contain transition-transform duration-500 group-hover:scale-110"
                />

              </div>

              {/* Product Info */}
              <div className="p-5">

                {/* Updated text-gray-700 to #064e3b */}
                <h3 className="text-sm font-bold text-[#064e3b] mb-3 line-clamp-2 uppercase tracking-tight">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2">
                  {/* Updated text-orange-600 to emerald-600 or kept orange for contrast */}
                  <span className="text-lg font-black text-emerald-600">
                    ₱{product.price.toLocaleString()}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ₱{product.oldPrice.toLocaleString()}
                  </span>
                </div>

                <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-widest">
                  {product.sold} sold
                </p>

                {/* Updated background from green-700 to #064e3b */}
                <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#064e3b] hover:bg-emerald-700 text-white py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-all shadow-md active:scale-95">
                  <ShoppingCart size={16}/>
                  Buy Now
                </button>

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  )
}