'use client';

import React, { useEffect, useState } from 'react';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { getCartItem, updateCartItem, removeCartItem, clearCart } from '@/server/api/cart';
import { useRouter } from 'next/navigation';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
  image?: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const router = useRouter();

  // ================= FETCH =================
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const res = await getCartItem();

      const items = res?.data?.data?.items || [];

      const formatted = items.map((item: any) => ({
        id: item.product?.id,
        cart_id: item.id,
        name: item.product?.name,
        price: Number(item.price),
        quantity: item.quantity,
        stock: item.product?.stock_quantity,
        image: item.product?.product_photo?.[0]?.url || null,
      }));

      setCartItems(formatted);
    } catch (error) {
      console.error('Fetch cart error:', error);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  // ================= UPDATE QTY =================
  const updateQty = async (id: string, type: 'inc' | 'dec') => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;

    let newQty = item.quantity;
    if (type === 'inc') newQty++;
    if (type === 'dec' && newQty > 1) newQty--;

    const prevItems = [...cartItems];

    // ✅ Optimistic UI
    setCartItems((items) => items.map((i) => (i.id === id ? { ...i, quantity: newQty } : i)));

    try {
      setUpdatingId(id);
      await updateCartItem(id, newQty);
    } catch (error) {
      console.error('Update failed:', error);
      setCartItems(prevItems); // rollback
    } finally {
      setUpdatingId(null);
    }
  };

  // ================= REMOVE =================
  const removeItem = async (id: string) => {
    const prevItems = [...cartItems];

    setCartItems((items) => items.filter((i) => i.id !== id));

    try {
      setUpdatingId(id);
      await removeCartItem(id);
    } catch (error) {
      console.error('Remove failed:', error);
      setCartItems(prevItems); // rollback
    } finally {
      setUpdatingId(null);
    }
  };

  // ================= CLEAR =================
  const handleClearCart = async () => {
    if (!confirm('Are you sure you want to clear your cart?')) return;

    try {
      await clearCart();
      setCartItems([]);
    } catch (error) {
      console.error('Clear cart failed:', error);
    }
  };

  // ================= TOTAL =================
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="w-full h-[3px] bg-blue-100 overflow-hidden">
          <div className="h-full bg-blue-500 animate-loading-bar"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 sm:px-6 py-10">
      <div className="max-w-[1000px] mx-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <ShoppingCart className="text-emerald-600" />
            <h1 className="text-xl font-black uppercase tracking-widest">Your Cart</h1>
          </div>

          {cartItems.length > 0 && (
            <button
              onClick={handleClearCart}
              className="text-sm text-red-500 font-bold hover:underline"
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* EMPTY STATE */}
        {cartItems.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">
              Your cart is empty
            </p>

            <button
              onClick={() => router.push('/customer/shop')}
              className="mt-5 px-6 py-2 bg-emerald-600 text-white rounded-lg text-sm font-bold hover:bg-emerald-700 transition"
            >
              Continue Shopping
            </button>
          </div>
        )}

        {/* ITEMS */}
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl p-4 flex gap-4 items-center hover:shadow-sm transition"
            >
              {/* IMAGE */}
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.image}`}
                onError={(e) => (e.currentTarget.src = '/placeholder.png')}
                className="w-20 h-20 object-contain bg-slate-50 rounded-lg"
              />

              {/* INFO */}
              <div className="flex-1">
                <h2 className="font-bold text-sm text-[#064e3b] uppercase">{item.name}</h2>

                <p className="text-emerald-600 font-black mt-1">₱{item.price.toLocaleString()}</p>

                <p className="text-xs text-gray-400 mt-1">{item.stock} in stock</p>
              </div>

              {/* QUANTITY */}
              <div className="flex items-center gap-2">
                <button
                  disabled={updatingId === item.id}
                  onClick={() => updateQty(item.id, 'dec')}
                  className="w-8 h-8 border rounded-lg flex items-center justify-center disabled:opacity-50"
                >
                  <Minus size={14} />
                </button>

                <span className="w-8 text-center font-bold">{item.quantity}</span>

                <button
                  disabled={updatingId === item.id}
                  onClick={() => updateQty(item.id, 'inc')}
                  className="w-8 h-8 border rounded-lg flex items-center justify-center disabled:opacity-50"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* SUBTOTAL */}
              <div className="w-24 text-right font-black text-sm text-emerald-600">
                ₱{(item.price * item.quantity).toLocaleString()}
              </div>

              {/* REMOVE */}
              <button
                disabled={updatingId === item.id}
                onClick={() => removeItem(item.id)}
                className="text-red-400 hover:text-red-600 disabled:opacity-50"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        {cartItems.length > 0 && (
          <div className="mt-10 bg-white border rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-lg font-black">Total: ₱{total.toLocaleString()}</div>

            <button
              onClick={() => {
                // ✅ Save checkout items
                localStorage.setItem('checkout_items', JSON.stringify(cartItems));

                // ✅ Mark source
                localStorage.setItem('checkout_source', 'cart');

                router.push('/customer/order');
              }}
              className="w-full sm:w-auto bg-[#064e3b] hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest transition"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
