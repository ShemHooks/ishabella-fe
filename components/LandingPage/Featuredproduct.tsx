import React from "react"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Aircon",
    category: "SOLAR PANELS",
    price: 21500,
    oldPrice: 25000,
    rating: 4.8,
    reviews: 124,
    image: "/solar-panel.png",
    discount: "-14%",
  },
  {
    id: 2,
    name: "Power Cable",
    category: "SOLAR PANELS",
    price: 21500,
    oldPrice: 25000,
    rating: 4.8,
    reviews: 124,
    image: "/solar-panel.png",
    discount: "-14%",
  },
  {
    id: 3,
    name: "Solar ",
    category: "SOLAR PANELS",
    price: 21500,
    oldPrice: 25000,
    rating: 4.8,
    reviews: 124,
    image: "/solar-panel.png",
    discount: "-14%",
  },
  {
    id: 4,
    name: "SolarMax 400W Monocrystalline Panel",
    category: "SOLAR PANELS",
    price: 21500,
    oldPrice: 25000,
    rating: 4.8,
    reviews: 124,
    image: "/solar-panel.png",
    discount: "-14%",
  },
  {
    id: 5,
    name: "SolarMax 400W Monocrystalline Panel",
    category: "SOLAR PANELS",
    price: 21500,
    oldPrice: 25000,
    rating: 4.8,
    reviews: 124,
    image: "/solar-panel.png",
    discount: "-14%",
  },
  {
    id: 6,
    name: "SolarMax 400W Monocrystalline Panel",
    category: "SOLAR PANELS",
    price: 21500,
    oldPrice: 25000,
    rating: 4.8,
    reviews: 124,
    image: "/solar-panel.png",
    discount: "-14%",
  },
  {
    id: 7,
    name: "SolarMax 400W Monocrystalline Panel",
    category: "SOLAR PANELS",
    price: 21500,
    oldPrice: 25000,
    rating: 4.8,
    reviews: 124,
    image: "/solar-panel.png",
    discount: "-14%",
  },
  {
    id: 8,
    name: "SolarMax 400W Monocrystalline Panel",
    category: "SOLAR PANELS",
    price: 21500,
    oldPrice: 25000,
    rating: 4.8,
    reviews: 124,
    image: "/solar-panel.png",
    discount: "-14%",
  },
]

const Featuredproduct = () => {
  return (
    <section className="bg-white-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Featured Products
            </h2>
            <p className="text-slate-600 mt-2">
              Our best-selling solar energy solutions
            </p>
          </div>

          <button className="text-slate-600 hover:text-slate-900 font-medium">
            View All
          </button>
        </div>

       {/* Product Grid */}
<div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory 
                lg:grid lg:grid-cols-4 lg:overflow-visible">

  {products.map((product) => (
    <div
      key={product.id}
      className="min-w-[280px] snap-start 
                 bg-[#0b2d3c] rounded-2xl shadow-lg overflow-hidden 
                 hover:shadow-2xl transition"
    >
      {/* Image */}
      <div className="relative bg-gray-100 p-6 flex justify-center">
        <span className="absolute top-4 left-4 bg-cyan-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
          Best Seller!
        </span>

        <span className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
          {product.discount}
        </span>

        <img
          src={product.image}
          alt={product.name}
          className="h-48 object-contain"
        />
      </div>

      {/* Info */}
      <div className="p-6 text-white">
        <p className="text-cyan-400 text-xs font-semibold">
          {product.category}
        </p>

        <h3 className="mt-2 font-semibold text-sm">
          {product.name}
        </h3>

        <div className="flex items-center mt-3 text-yellow-400 text-sm">
          ⭐ {product.rating}
          <span className="text-slate-300 ml-2 text-xs">
            ({product.reviews} reviews)
          </span>
        </div>

        <div className="mt-4">
          <span className="text-lg font-bold">
            ₱{product.price.toLocaleString()}
          </span>

          <span className="ml-2 text-sm line-through text-slate-400">
            ₱{product.oldPrice.toLocaleString()}
          </span>
        </div>

        <p className="text-green-400 text-sm mt-2 font-medium">
          In Stock
        </p>

        <button className="mt-5 w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-full flex items-center justify-center gap-2 transition">
          Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featuredproduct
