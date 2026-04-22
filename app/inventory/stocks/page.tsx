"use client";

import React, { useState } from "react";
import { 
  PackagePlus, 
  Warehouse, 
  Layers, 
  Search, 
  Filter,
  X,
  Plus,
  Image as ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- SUB-COMPONENT: ADD STOCK MODAL ---
function AddStockModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [images, setImages] = useState<File[]>([]);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl border border-emerald-900/10 overflow-hidden flex flex-col max-h-[90vh]">
        
        <div className="p-8 border-b border-emerald-900/5 flex justify-between items-center bg-white">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-[#064e3b]">Register New Asset</h2>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/30">System Entry: PRD</p>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-emerald-50 rounded-2xl transition-colors">
            <X className="text-emerald-900/40" size={24} />
          </button>
        </div>

        <div className="p-8 overflow-y-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">Product Name</label>
                <input name="name" className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 p-4 rounded-xl focus:border-emerald-500 outline-none font-bold text-sm" placeholder="e.g. Solar Panel 550W Mono" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">SKU</label>
                  <input name="sku" className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 p-4 rounded-xl focus:border-emerald-500 outline-none font-bold text-xs uppercase tracking-wider" placeholder="SLP-550-01" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">Category UUID</label>
                  <input name="category_id" className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 p-4 rounded-xl font-bold text-xs" placeholder="Category ID" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">Description</label>
                <textarea name="description" rows={3} className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 p-4 rounded-xl focus:border-emerald-500 outline-none font-bold text-sm resize-none" placeholder="Technical specs..." />
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2 text-emerald-600">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">Cost</label>
                  <input type="number" name="cost_price" className="w-full bg-emerald-50/30 border-2 border-emerald-500/10 p-4 rounded-xl font-black text-sm" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">Retail</label>
                  <input type="number" name="price" className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 p-4 rounded-xl font-black text-sm" placeholder="0.00" />
                </div>
                <div className="space-y-2 text-blue-600">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">Quantity</label>
                  <input type="number" name="stock_quantity" className="w-full bg-blue-50/30 border-2 border-blue-500/10 p-4 rounded-xl font-black text-sm" placeholder="0" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">Photos (can add multiple)</label>
                <div className="border-2 border-dashed border-emerald-900/10 rounded-2xl p-4 bg-emerald-50/20">
                  <div className="grid grid-cols-3 gap-3">
                    {images.map((img, index) => (
                      <div key={index} className="aspect-square bg-white rounded-lg border relative group overflow-hidden">
                        <img src={URL.createObjectURL(img)} alt="preview" className="w-full h-full object-cover" />
                        <button type="button" onClick={() => setImages(images.filter((_, i) => i !== index))} className="absolute top-1 right-1 p-1 bg-rose-500 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                    <label className="aspect-square border-2 border-dashed border-emerald-900/20 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-50 transition-colors">
                      <Plus className="text-emerald-900/20" size={20} />
                      <input type="file" multiple className="hidden" onChange={handleImageChange} accept="image/*" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="p-8 bg-emerald-50/50 border-t border-emerald-900/5 flex gap-4">
          <button onClick={onClose} className="flex-1 px-8 py-4 bg-white border-2 border-emerald-900/5 rounded-2xl font-black uppercase tracking-widest text-[10px] text-emerald-900/40 hover:bg-red-500">Cancel</button>
          <Button className="flex-[2] bg-[#064e3b] hover:bg-emerald-600 text-white p-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl flex items-center justify-center gap-3">
             Commit to Inventory
          </Button>
        </div>
      </div>
    </div>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function StocksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 mb-2">
              <Warehouse size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Logistics Branch</span>
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tighter text-[#064e3b]">
              Stock Inventory
            </h1>
          </div>
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#064e3b] hover:bg-emerald-600 text-white px-8 py-6 rounded-xl font-black uppercase tracking-widest text-[11px] shadow-lg flex items-center gap-3"
          >
            <PackagePlus size={18} strokeWidth={3} />
            Stock In
          </Button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-2xl border border-emerald-900/5 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-emerald-50/50 border-b border-emerald-900/5">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/40">Product</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/40">Warehouse</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/40 text-right">Quantity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-900/5">
              <tr className="hover:bg-emerald-50/30 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700">
                      <Layers size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-emerald-900 uppercase">Solar Panel 550W</p>
                      <p className="text-[9px] font-bold text-emerald-900/30 uppercase tracking-tighter">SKU: SLP-550-PH</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="text-xs font-bold uppercase tracking-tight text-emerald-900/60">Main Warehouse</span>
                </td>
                <td className="px-8 py-6 text-right">
                  <span className="text-lg font-black text-emerald-900">120</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <p className="mt-10 text-center text-[9px] font-black uppercase tracking-[0.5em] text-emerald-900/20">
          Ishabella Registry — Operational v2.0
        </p>

        {/* Modal Mount */}
        <AddStockModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}