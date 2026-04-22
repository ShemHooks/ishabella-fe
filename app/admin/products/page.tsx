'use client';
import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Package, X, AlertCircle, Search, Filter } from 'lucide-react';

export default function ProductsPage() {
  // 1. DATA STATE
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Solar Panel 550W',
      sku: 'SP-001',
      price: 15000,
      stock: 20,
      category: 'Solar',
      status: 'In Stock',
    },
    {
      id: 2,
      name: 'Lithium Battery 100Ah',
      sku: 'BT-092',
      price: 25000,
      stock: 8,
      category: 'Battery',
      status: 'Low Stock',
    },
  ]);

  // 2. MODAL CONTROL STATES
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // 3. TRACKING SELECTED PRODUCT FOR EDIT/DELETE
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // --- ACTIONS ---
  const confirmDelete = () => {
    setProducts(products.filter((p) => p.id !== selectedProduct.id));
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      {/* HEADER SECTION */}

      {/* SEARCH BAR (Visual Only for now) */}
      <div className="bg-white p-4 rounded-[24px] shadow-sm border border-emerald-50 mb-8 flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm"
            placeholder="Search..."
          />
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 text-[#064e3b] rounded-xl text-xs font-black uppercase">
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[40px] shadow-sm border border-emerald-50 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#064e3b] text-white">
            <tr>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">
                Product Details
              </th>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest">Price</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-center">
                Manage
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-50">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-emerald-50/30 transition-colors">
                <td className="px-8 py-5">
                  <div className="flex flex-col">
                    <span className="font-bold text-[#064e3b] uppercase tracking-tight">
                      {product.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
                      SKU: {product.sku}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-5 font-black text-[#064e3b]">
                  ₱{product.price.toLocaleString()}
                </td>
                <td className="px-8 py-5">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setIsEditModalOpen(true);
                      }}
                      className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl hover:bg-emerald-500 hover:text-white transition-all"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setIsDeleteModalOpen(true);
                      }}
                      className="p-3 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- MODALS --- */}

      {/* ADD / EDIT MODAL (Combined Logic) */}
      {(isAddModalOpen || isEditModalOpen) && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-lg rounded-[40px] p-10 shadow-2xl animate-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black text-[#064e3b] italic uppercase tracking-tighter">
                {isEditModalOpen ? 'Update Product' : 'New Product'}
              </h3>
              <button
                onClick={() => {
                  setIsAddModalOpen(false);
                  setIsEditModalOpen(false);
                }}
                className="text-slate-300 hover:text-red-500 transition-colors"
              >
                <X />
              </button>
            </div>

            <div className="space-y-4">
              <input
                className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 font-bold text-[#064e3b]"
                defaultValue={isEditModalOpen ? selectedProduct?.name : ''}
                placeholder="Product Name"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  className="w-full p-4 bg-slate-50 rounded-2xl outline-none"
                  defaultValue={isEditModalOpen ? selectedProduct?.sku : ''}
                  placeholder="SKU Code"
                />
                <input
                  className="w-full p-4 bg-slate-50 rounded-2xl outline-none"
                  defaultValue={isEditModalOpen ? selectedProduct?.price : ''}
                  placeholder="Price"
                  type="number"
                />
              </div>
              <button className="w-full py-5 bg-[#064e3b] text-white font-black uppercase text-xs tracking-widest rounded-[20px] shadow-lg hover:bg-emerald-700 transition-all mt-4">
                {isEditModalOpen ? 'Save Changes' : 'Create Product'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE MODAL */}
      {isDeleteModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-sm rounded-[40px] p-10 shadow-2xl text-center border-b-8 border-red-500">
            <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle size={40} />
            </div>
            <h3 className="text-xl font-black text-[#064e3b] italic uppercase tracking-tighter">
              Delete Product?
            </h3>
            <p className="text-slate-400 text-xs mt-3 px-4 font-bold uppercase tracking-tight italic">
              Are you sure you want to remove{' '}
              <span className="text-red-500 font-black">"{selectedProduct.name}"</span>? This cannot
              be undone.
            </p>
            <div className="flex gap-4 mt-10">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="flex-1 py-4 font-black uppercase text-[10px] tracking-widest text-slate-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 py-4 bg-red-500 text-white font-black uppercase text-[10px] tracking-widest rounded-[18px] hover:bg-red-600 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
