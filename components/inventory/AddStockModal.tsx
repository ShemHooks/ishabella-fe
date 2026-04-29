'use client';

import React, { useState, useEffect } from 'react';
import { X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProductCategories } from '@/server/api/app';
import { createProductCategory } from '@/server/api/productCategory';
import { createProduct } from '@/server/api/products';

export function AddStockModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [images, setImages] = useState<File[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCreateCategory, setShowCreateCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState<string>('');

  const [isSkuManual, setIsSkuManual] = useState(false);

  const [form, setForm] = useState({
    name: '',
    sku: '',
    description: '',
    price: '',
    cost_price: '',
    stock_quantity: '',
  });

  // 🔥 SKU GENERATOR
  const generateSKU = (name: string) => {
    if (!name) return '';

    const clean = name.toUpperCase().replace(/[^A-Z0-9 ]/g, '');
    const words = clean.split(' ').filter(Boolean);

    const brand = words
      .slice(0, 2)
      .map((w) => w[0])
      .join('');

    const powerMatch = clean.match(/(\d+)\s?KW/);
    const power = powerMatch ? powerMatch[1] + 'K' : '';

    let type = '';
    if (clean.includes('LIFEPO4')) type += 'LFP';
    if (clean.includes('BATTERY')) type += 'B';
    if (clean.includes('SYSTEM')) type += 'S';
    if (clean.includes('SOLAR')) type += 'SOL';

    const random = Math.random().toString(36).substring(2, 8).toUpperCase();

    return `${brand}${power}-${type}-${random}`;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  const getCategories = async () => {
    const res = await getProductCategories();
    setCategories(res.data.data);
  };

  const handleCreateCategory = async () => {
    if (!newCategoryName.trim()) return;

    const res = await createProductCategory({ name: newCategoryName });
    const newCategory = res.data.data;

    setCategories((prev) => [...prev, newCategory]);
    setSelectedCategory(newCategory.id);

    setNewCategoryName('');
    setShowCreateCategory(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const updated = { ...prev, [name]: value };

      // 🔥 AUTO SKU (only if not manually edited)
      if (name === 'name' && !isSkuManual) {
        updated.sku = generateSKU(value);
      }

      return updated;
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!form.name || !form.sku || !form.price || !selectedCategory) {
        setError('Please fill in all required fields.');
        setLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('sku', form.sku);
      formData.append('description', form.description);
      formData.append('price', form.price);
      formData.append('cost_price', form.cost_price);
      formData.append('stock_quantity', form.stock_quantity);
      formData.append('category_id', selectedCategory);

      images.forEach((img) => {
        formData.append('images[]', img);
      });

      await createProduct(formData);

      setForm({
        name: '',
        sku: '',
        description: '',
        price: '',
        cost_price: '',
        stock_quantity: '',
      });
      setImages([]);
      setSelectedCategory('');
      setIsSkuManual(false);

      onClose();
    } catch (error: any) {
      if (error?.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl border border-emerald-900/10 overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-8 border-b border-emerald-900/5 flex justify-between items-center bg-white">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-[#064e3b]">
              Register New Asset
            </h2>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/30">
              System Entry: PRD
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-emerald-50 rounded-2xl transition-colors"
          >
            <X className="text-emerald-900/40" size={24} />
          </button>
        </div>

        <div className="p-8 overflow-y-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">
                  Product Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 p-4 rounded-xl focus:border-emerald-500 outline-none font-bold text-sm"
                  placeholder="e.g. Solar Panel 550W Mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">
                    SKU
                  </label>
                  <input
                    name="sku"
                    value={form.sku}
                    onChange={(e) => {
                      setIsSkuManual(true);
                      handleChange(e);
                    }}
                    className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 p-4 rounded-xl focus:border-emerald-500 outline-none font-bold text-xs uppercase tracking-wider"
                    placeholder="SLP-550-01"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">
                    Product Category
                  </label>

                  <select
                    value={selectedCategory}
                    onChange={(e) => {
                      if (e.target.value === 'create_new') {
                        setShowCreateCategory(true);
                      } else {
                        setSelectedCategory(e.target.value);
                      }
                    }}
                    className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 p-4 rounded-xl font-bold text-xs"
                  >
                    <option value="">Select Category</option>

                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}

                    <option value="create_new">+ Create New Category</option>
                  </select>

                  {showCreateCategory && (
                    <div className="mt-2 p-3 border border-emerald-200 rounded-xl bg-emerald-50/50 space-y-2">
                      <input
                        type="text"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        placeholder="New category name..."
                        className="w-full bg-white border p-2 rounded-lg text-xs font-bold"
                      />

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={handleCreateCategory}
                          className="px-3 py-1 bg-emerald-600 text-white rounded-lg text-[10px] font-bold"
                        >
                          Save
                        </button>

                        <button
                          type="button"
                          onClick={() => setShowCreateCategory(false)}
                          className="px-3 py-1 bg-gray-200 rounded-lg text-[10px] font-bold"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 p-4 rounded-xl focus:border-emerald-500 outline-none font-bold text-sm resize-none"
                  placeholder="Technical specs..."
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2 text-emerald-600">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">
                    Cost
                  </label>
                  <input
                    type="number"
                    value={form.cost_price}
                    onChange={handleChange}
                    name="cost_price"
                    className="w-full bg-emerald-50/30 border-2 border-emerald-500/10 p-4 rounded-xl font-black text-sm"
                    placeholder="0.00"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">
                    Retail
                  </label>
                  <input
                    type="number"
                    value={form.price}
                    onChange={handleChange}
                    name="price"
                    className="w-full bg-emerald-50/30 border-2 border-emerald-900/5 p-4 rounded-xl font-black text-sm"
                    placeholder="0.00"
                  />
                </div>

                <div className="space-y-2 text-blue-600">
                  <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    value={form.stock_quantity}
                    onChange={handleChange}
                    name="stock_quantity"
                    className="w-full bg-blue-50/30 border-2 border-blue-500/10 p-4 rounded-xl font-black text-sm"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/60 ml-1">
                  Photos (can add multiple)
                </label>

                <div className="border-2 border-dashed border-emerald-900/10 rounded-2xl p-4 bg-emerald-50/20">
                  <div className="grid grid-cols-3 gap-3">
                    {images.map((img, index) => (
                      <div
                        key={index}
                        className="aspect-square bg-white rounded-lg border relative group overflow-hidden"
                      >
                        <img
                          src={URL.createObjectURL(img)}
                          alt="preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => setImages(images.filter((_, i) => i !== index))}
                          className="absolute top-1 right-1 p-1 bg-rose-500 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}

                    <label className="aspect-square border-2 border-dashed border-emerald-900/20 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-50 transition-colors">
                      <Plus className="text-emerald-900/20" size={20} />
                      <input
                        type="file"
                        multiple
                        className="hidden"
                        onChange={handleImageChange}
                        accept="image/*"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>

          {error && <p className="mt-4 text-sm font-bold text-red-600">{error}</p>}
        </div>

        <div className="p-8 bg-emerald-50/50 border-t border-emerald-900/5 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-8 py-4 bg-white border-2 border-emerald-900/5 rounded-2xl font-black uppercase tracking-widest text-[10px] text-emerald-900/40 hover:bg-red-500"
          >
            Cancel
          </button>

          <Button
            className="flex-[2] bg-[#064e3b] hover:bg-emerald-600 text-white p-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl flex items-center justify-center gap-3"
            onClick={() => handleSubmit()}
          >
            {loading ? 'Processing...' : 'Commit to Inventory'}
          </Button>
        </div>
      </div>
    </div>
  );
}
