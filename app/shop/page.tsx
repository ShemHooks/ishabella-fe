import React from "react"
import { ShoppingCart } from "lucide-react"

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
    name: "Smart Energy Pure Sine Wave Inverter 3000W",
    price: 13500,
    oldPrice: 15300,
    sold: "750+",
    discount: "-17%",
    image: "/panel2.png",
  },
]

export default function DailyDiscover() {
  return (
    <section className="py-16 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Promo badges */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">

          <div className="px-6 py-3 bg-white shadow rounded-lg text-sm font-semibold text-gray-700">
            🚚 Free Shipping
          </div>

          <div className="px-6 py-3 bg-white shadow rounded-lg text-sm font-semibold text-gray-700">
            💳 Paylater 0% Interest
          </div>

          <div className="px-6 py-3 bg-white shadow rounded-lg text-sm font-semibold text-gray-700">
            🔥 Mega Discount
          </div>

        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Daily Discover
        </h2>

        {/* Product Grid */}
        <div className="grid gap-8 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-4">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >

              {/* Image */}
              <div className="relative">

                <img
                  src={product.image}
                  className="h-56 w-full object-cover"
                />

                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount}
                </span>

                <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-2 py-1 rounded">
                  Best Seller
                </span>

              </div>

              {/* Product info */}
              <div className="p-5">

                <h3 className="text-sm font-semibold text-gray-700 line-clamp-2">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center gap-2">

                  <span className="text-xl font-bold text-orange-600">
                    ₱{product.price.toLocaleString()}
                  </span>

                  <span className="line-through text-gray-400 text-sm">
                    ₱{product.oldPrice.toLocaleString()}
                  </span>

                </div>

                <p className="text-xs text-gray-500 mt-1">
                  {product.sold} sold
                </p>

                {/* Buy Button */}
                <button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-white-600 text-white py-2 rounded-lg transition">
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