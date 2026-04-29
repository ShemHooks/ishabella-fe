'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ShoppingCart, Truck, ShieldCheck, Zap } from 'lucide-react';
import { getProductById } from '@/server/api/products';
import { addItemToCart } from '@/server/api/cart';
import { useRouter } from 'next/navigation';

export default function ProductDetailsPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const router = useRouter();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // ✅ FETCH PRODUCT
  const fetchProduct = async () => {
    try {
      if (!id) return;
      setLoading(true);
      const res = await getProductById(id);
      setProduct(res?.data?.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  // ✅ QUANTITY
  const increaseQty = () => {
    if (quantity < (product?.stock_quantity || 0)) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // ✅ ANIMATION (FLY TO CART)
  const animateToCart = () => {
    const img = document.querySelector('#main-product-image') as HTMLImageElement;
    const cart = document.querySelector('#cart-icon');

    if (!img || !cart) return;

    const imgRect = img.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();

    const flyingImg = img.cloneNode(true) as HTMLImageElement;

    flyingImg.style.position = 'fixed';
    flyingImg.style.left = `${imgRect.left}px`;
    flyingImg.style.top = `${imgRect.top}px`;
    flyingImg.style.width = `${imgRect.width}px`;
    flyingImg.style.height = `${imgRect.height}px`;
    flyingImg.style.zIndex = '9999';
    flyingImg.style.transition = 'all 1s cubic-bezier(.4,0,.2,1)';
    flyingImg.style.pointerEvents = 'none';
    flyingImg.style.borderRadius = '12px';

    document.body.appendChild(flyingImg);

    requestAnimationFrame(() => {
      flyingImg.style.left = `${cartRect.left}px`;
      flyingImg.style.top = `${cartRect.top}px`;
      flyingImg.style.width = '40px';
      flyingImg.style.height = '40px';
      flyingImg.style.opacity = '0.5';
    });

    // cart bounce
    cart.classList.add('animate-bounce');
    setTimeout(() => cart.classList.remove('animate-bounce'), 500);

    setTimeout(() => {
      flyingImg.remove();
    }, 800);
  };

  // ✅ ADD TO CART
  const addCartItems = async () => {
    try {
      animateToCart(); // 🎯 animation first

      const price = product.price * quantity;

      await addItemToCart({
        product_id: id,
        quantity,
        price,
      });
    } catch (error: any) {
      console.log(error.response?.data);
    }
  };

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

  // ✅ LOADING
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="w-full h-[3px] bg-blue-100 overflow-hidden">
          <div className="h-full bg-blue-500 animate-loading-bar"></div>
        </div>
      </div>
    );
  }

  // ✅ NO PRODUCT
  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500 font-bold">
        Product not found
      </div>
    );
  }

  const photos = product.product_photo || [];
  const isOutOfStock = product.stock_quantity === 0;

  return (
    <div className="min-h-screen bg-slate-50 px-4 sm:px-6 py-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT */}
        <div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border">
            <img
              id="main-product-image"
              src={
                photos[activeImage]
                  ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${photos[activeImage].url}`
                  : '/placeholder.png'
              }
              className="w-full h-[300px] sm:h-[450px] object-contain"
            />
          </div>

          {photos.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto">
              {photos.map((photo: any, index: number) => {
                const imageUrl = `${process.env.NEXT_PUBLIC_API_URL}/storage/${photo.url}`;
                return (
                  <img
                    key={index}
                    src={imageUrl}
                    onClick={() => setActiveImage(index)}
                    className={`h-16 w-16 object-contain border rounded-lg cursor-pointer ${
                      activeImage === index ? 'border-emerald-600' : 'border-gray-200'
                    }`}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="flex flex-col">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            {product.category?.name}
          </p>

          <h1 className="text-2xl sm:text-3xl font-black text-[#064e3b] uppercase tracking-tight mb-4">
            {product.name}
          </h1>

          <p className="text-2xl sm:text-3xl font-black text-emerald-600 mb-2">
            ₱{Number(product.price || 0).toLocaleString()}
          </p>

          <p className="text-sm text-gray-400 font-bold mb-6 uppercase tracking-widest">
            {product.stock_quantity ?? 0} in stock
          </p>

          <div className="text-sm text-gray-600 leading-relaxed mb-8">
            {product.description || 'No description available.'}
          </div>

          {/* FEATURES */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-center">
            <div className="bg-white border rounded-xl p-4 text-xs font-bold">
              <Truck className="mx-auto mb-2 text-emerald-600" size={18} />
              Fast Delivery
            </div>
            <div className="bg-white border rounded-xl p-4 text-xs font-bold">
              <ShieldCheck className="mx-auto mb-2 text-emerald-600" size={18} />
              Warranty
            </div>
            <div className="bg-white border rounded-xl p-4 text-xs font-bold">
              <Zap className="mx-auto mb-2 text-emerald-600" size={18} />
              High Quality
            </div>
          </div>

          {/* QUANTITY */}
          <div className="mb-6">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              Quantity
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={decreaseQty}
                disabled={quantity === 1}
                className="w-10 h-10 flex items-center justify-center border rounded-lg text-lg font-bold hover:bg-gray-100 disabled:opacity-30"
              >
                -
              </button>

              <span className="w-12 text-center font-black text-lg">{quantity}</span>

              <button
                onClick={increaseQty}
                disabled={quantity === product.stock_quantity}
                className="w-10 h-10 flex items-center justify-center border rounded-lg text-lg font-bold hover:bg-gray-100 disabled:opacity-30"
              >
                +
              </button>
            </div>

            {quantity === product.stock_quantity && (
              <p className="text-xs text-red-400 mt-2 font-bold">Max stock reached</p>
            )}
          </div>

          {/* CTA */}
          <div className="flex gap-3">
            <button
              disabled={isOutOfStock}
              onClick={(e) => handleBuyNow(e, product)}
              className={`flex-1 py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 transition
              ${
                isOutOfStock
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-[#064e3b] hover:bg-emerald-700 text-white'
              }
              `}
            >
              <ShoppingCart size={18} />
              {isOutOfStock ? 'Out of Stock' : `Buy Now (${quantity})`}
            </button>

            <button
              onClick={addCartItems}
              disabled={isOutOfStock}
              className="flex-1 border border-gray-300 hover:border-emerald-600 text-gray-700 py-4 rounded-xl font-black uppercase tracking-widest transition disabled:opacity-30"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
