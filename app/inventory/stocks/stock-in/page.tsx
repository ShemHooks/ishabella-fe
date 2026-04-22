'use client';

import React, { useState } from 'react';
import {
  PackagePlus,
  Warehouse,
  Layers,
  Search,
  X,
  Plus,
  ArrowRight,
  ClipboardList,
  Fingerprint,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function StocksPage() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    productId: '',
    warehouseId: '',
    quantity: '',
    reference: '',
  });

  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 mb-2">
              <Layers size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                Operational Flow
              </span>
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tighter text-[#064e3b]">
              Stock Inventory
            </h1>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#064e3b] hover:bg-emerald-600 text-white px-8 py-6 rounded-xl font-black uppercase tracking-widest text-[11px] shadow-lg transition-all active:scale-95 flex items-center gap-3">
                <PackagePlus size={18} strokeWidth={3} />
                Stock In
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-xl bg-white border-none rounded-[2.5rem] shadow-2xl p-0 overflow-hidden">
              <div className="bg-[#064e3b] p-8 text-white relative overflow-hidden">
                <div className="absolute -right-4 -top-4 opacity-10">
                  <PackagePlus size={120} strokeWidth={1} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-1 relative z-10">
                  Stock In Protocol
                </h2>
                <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest relative z-10">
                  Logistics Deployment System
                </p>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Product ID Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">
                      Asset Identity (UUID)
                    </label>
                    <div className="relative">
                      <Fingerprint
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900/20"
                        size={18}
                      />
                      <input
                        value={form.productId}
                        onChange={(e) => setForm({ ...form, productId: e.target.value })}
                        className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 pl-12 pr-4 py-4 rounded-xl focus:border-emerald-500 outline-none font-bold text-sm transition-all"
                        placeholder="Enter UUID"
                      />
                    </div>
                  </div>

                  {/* Warehouse ID Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">
                      Warehouse Sector
                    </label>
                    <div className="relative">
                      <Warehouse
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900/20"
                        size={18}
                      />
                      <input
                        value={form.warehouseId}
                        onChange={(e) => setForm({ ...form, warehouseId: e.target.value })}
                        className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 pl-12 pr-4 py-4 rounded-xl focus:border-emerald-500 outline-none font-bold text-sm transition-all"
                        placeholder="Sector UUID"
                      />
                    </div>
                  </div>
                </div>

                {/* Quantity Input */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">
                    Deployment Quantity
                  </label>
                  <div className="relative">
                    <Plus
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900/20"
                      size={18}
                    />
                    <input
                      type="number"
                      value={form.quantity}
                      onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                      className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 pl-12 pr-4 py-4 rounded-xl focus:border-emerald-500 outline-none font-black text-xl tracking-tighter"
                      placeholder="000"
                    />
                  </div>
                </div>

                {/* Reference Input */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">
                    Reference Notes
                  </label>
                  <textarea
                    value={form.reference}
                    onChange={(e) => setForm({ ...form, reference: e.target.value })}
                    rows={3}
                    className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 p-4 rounded-xl focus:border-emerald-500 outline-none font-bold text-sm resize-none"
                    placeholder="Optional technical reference..."
                  />
                </div>

                <Button
                  disabled={loading}
                  className="w-full bg-[#064e3b] hover:bg-emerald-600 text-white p-8 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3"
                >
                  {loading ? 'Synchronizing...' : 'Execute Stock In'}
                  <ArrowRight size={18} strokeWidth={3} />
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search / Filter Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-900/5 mb-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900/20"
              size={18}
            />
            <input
              placeholder="Search stock registry..."
              className="w-full bg-emerald-50/30 border-2 border-transparent focus:border-emerald-500/20 p-3 pl-12 rounded-xl text-sm font-bold transition-all outline-none"
            />
          </div>
          <div className="h-10 w-[1px] bg-emerald-900/5 hidden md:block" />
          <p className="text-[10px] font-black uppercase text-emerald-900/30 tracking-widest px-4">
            Registry Active
          </p>
        </div>

        {/* Main Table */}
        <div className="bg-white rounded-3xl shadow-2xl border border-emerald-900/5 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-emerald-50/50 border-b border-emerald-900/5">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/40">
                  Product Description
                </th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/40">
                  Warehouse Cluster
                </th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/40 text-right">
                  Available Stock
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-900/5">
              <tr className="hover:bg-emerald-50/30 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700">
                      <Layers size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-emerald-900 uppercase tracking-tight">
                        Solar Panel 550W
                      </p>
                      <p className="text-[9px] font-bold text-emerald-900/30 uppercase tracking-tighter">
                        Inventory Code: SLP-550
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    <Warehouse size={14} className="text-emerald-900/20" />
                    <span className="text-xs font-bold uppercase text-emerald-900/60">
                      Main Warehouse
                    </span>
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <span className="text-lg font-black text-emerald-900">120</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="bg-emerald-50/20 px-8 py-4 border-t border-emerald-900/5">
            <p className="text-[9px] font-black uppercase tracking-widest text-emerald-900/20">
              End of Stock Ledger
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
