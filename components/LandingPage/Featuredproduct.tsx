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
            <h2 className="text-3xl font-bold text-gray-800">
              Featured Products
            </h2>
            <p className="text-gray-500">
              Your One-Stop Shop for Solar Parts & Expert Installation.
            </p>
          </div>

          <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
            View All
            <ArrowRight size={16}/>
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >

              {/* Image */}
              <div className="relative bg-gray-100 h-56 flex items-center justify-center">

                <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-3 py-1 rounded">
                  Best Seller
                </span>

                <span className="absolute top-3 right-3 bg-yellow-300 text-red-500 text-xs px-3 py-1 rounded">
                  {product.discount}
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 object-contain"
                />

              </div>

              {/* Product Info */}
              <div className="p-5">

                <h3 className="text-sm font-medium text-gray-700 mb-3 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-orange-600">
                    ₱{product.price.toLocaleString()}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ₱{product.oldPrice.toLocaleString()}
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-1">
                  {product.sold} sold
                </p>

                <button className="mt-4 w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-850 text-white py-2 rounded-lg transition">
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