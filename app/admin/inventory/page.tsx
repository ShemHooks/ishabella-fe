"use client";
import React, { useState } from "react";
import { Plus, Edit2, Trash2, Package, X, AlertCircle } from "lucide-react";

export default function InventoryPage() {
  const [products, setProducts] = useState([
    { id: 1, name: "170W Monocrystalline Solar Panel", category: "Solar", stock: 45, price: 1300 },
    { id: 2, name: "Complete 1kW Solar Kit", category: "Solar", stock: 12, price: 49000 },
    { id: 3, name: "Split Type A/C Unit 1.5HP", category: "Air Units", stock: 5, price: 28500 },
  ]);

  // States for handling which modal is open and which product is selected
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Function to open Edit Modal
  const handleEditClick = (product: any) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  // Function to open Delete Modal
  const handleDeleteClick = (product: any) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  // Logic to actually remove the product
  const confirmDelete = () => {
    setProducts(products.filter(p => p.id !== selectedProduct.id));
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      {/* HEADER SECTION */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-black  uppercase tracking-tighter">
          Inventory <span className="text-black">Warehouse</span>
        </h2>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[32px] shadow-sm border border-emerald-50 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#064e3b] text-white">
            <tr>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Product</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-50">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-emerald-50/30 transition-colors">
                <td className="px-6 py-4 font-bold text-[#064e3b]">{product.name}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    <button 
                      onClick={() => handleEditClick(product)}
                      className="p-2 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-500 hover:text-white transition-all"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button 
                      onClick={() => handleDeleteClick(product)}
                      className="p-2 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* EDIT MODAL */}
      {isEditModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md rounded-[32px] p-8 shadow-2xl animate-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-black text-[#064e3b] italic uppercase tracking-tighter">Edit Product</h3>
              <button onClick={() => setIsEditModalOpen(false)}><X size={20} /></button>
            </div>
            
            <div className="space-y-4">
              <input 
                className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500" 
                defaultValue={selectedProduct.name} 
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  className="p-4 bg-slate-50 rounded-xl outline-none" 
                  defaultValue={selectedProduct.stock} 
                  type="number"
                />
                <input 
                  className="p-4 bg-slate-50 rounded-xl outline-none" 
                  defaultValue={selectedProduct.price} 
                  type="number"
                />
              </div>
              <button className="w-full py-4 bg-[#064e3b] text-white font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-emerald-700 transition-all">
                Update Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {isDeleteModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-sm rounded-[32px] p-8 shadow-2xl text-center animate-in fade-in duration-200">
            <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-xl font-black text-[#064e3b] italic uppercase tracking-tighter">Are you sure?</h3>
            <p className="text-slate-500 text-sm mt-2">
              You are about to delete <br/>
              <span className="font-bold text-red-500">"{selectedProduct.name}"</span>
            </p>
            
            <div className="flex gap-3 mt-8">
              <button 
                onClick={() => setIsDeleteModalOpen(false)}
                className="flex-1 py-3 font-bold text-slate-400 hover:bg-slate-50 rounded-xl transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete}
                className="flex-1 py-3 bg-red-500 text-white font-black uppercase text-xs tracking-widest rounded-xl hover:bg-red-600 transition-all shadow-lg shadow-red-200"
              >
                Delete Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}