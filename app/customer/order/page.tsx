'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { createOrder } from '@/server/api/order';

export default function OrderPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [items, setItems] = useState<any[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('gcash');
  const [loading, setLoading] = useState(false);

  // ================= LOAD CART FROM QUERY =================
  useEffect(() => {
    // 🔥 PRIORITY 1: localStorage
    const stored = localStorage.getItem('checkout_items');

    if (stored) {
      try {
        setItems(JSON.parse(stored));
        return;
      } catch {
        localStorage.removeItem('checkout_items');
      }
    }

    // 🔥 OPTIONAL fallback (if you still use query somewhere)
    const data = searchParams.get('items');

    if (data) {
      try {
        setItems(JSON.parse(data));
        return;
      } catch {}
    }

    // ❌ No data → redirect
    router.push('/customer/cart');
  }, []);

  // ================= TOTAL =================
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // ================= SUBMIT =================
  const handlePlaceOrder = async () => {
    try {
      setLoading(true);

      // 🔥 IMPORTANT: transform cart → API format
      const formattedItems = items.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      }));

      // 1. Create Order
      const orderRes = await createOrder(formattedItems);
      const orderId = orderRes.data.id;

      // 2. Pay
      await payOrder(orderId, {
        payment_method: paymentMethod,
        amount: total,
      });

      // 3. Redirect success
      router.push('/customer/order/success');
    } catch (error) {
      console.error(error);
      alert('❌ Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {/* ORDER SUMMARY */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-black mb-4">Order Summary</h2>

          {items.map((item, i) => (
            <div key={i} className="flex justify-between mb-3">
              <div>
                <p className="font-bold text-sm">{item.name}</p>
                <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
              </div>
              <p className="font-bold">₱{(item.price * item.quantity).toLocaleString()}</p>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between font-black text-lg">
            <span>Total</span>
            <span>₱{total.toLocaleString()}</span>
          </div>
        </div>

        {/* PAYMENT */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-black mb-4">Payment Method</h2>

          <div className="space-y-3">
            {['gcash', 'cod', 'card'].map((method) => (
              <label
                key={method}
                className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer"
              >
                <input
                  type="radio"
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                />
                {method.toUpperCase()}
              </label>
            ))}
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={loading}
            className="w-full mt-6 bg-black text-white py-3 rounded-xl"
          >
            {loading ? 'Processing...' : 'Confirm & Pay'}
          </button>
        </div>
      </div>
    </div>
  );
}
