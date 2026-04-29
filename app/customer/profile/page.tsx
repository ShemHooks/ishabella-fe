'use client';

import React, { useState } from 'react';

export default function CustomerProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');

  const [form, setForm] = useState({
    name: '',
    phone: '',
    age: '',
    gender: '',
    province: '',
    city: '',
    barangay: '',
    street: '',
    land_mark: '',
  });

  const avatarUrl = `https://api.dicebear.com/7.x/adventurer/svg?seed=RANDOM`;
  const [loading, setLoading] = useState(false);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      console.log(form);
      alert('✅ Profile updated');
    } catch (e) {
      alert('❌ Error saving profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[250px_1fr] gap-6">
        {/* SIDEBAR */}
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="relative rounded-[50%] border border-1 border-emerald-900">
              <img src={avatarUrl} className="w-20 h-20 rounded-full" />
            </div>

            <p className="mt-3 font-bold">{form.name || 'Client'}</p>
          </div>

          <div className="space-y-2 text-sm font-medium">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full text-left px-3 py-2 rounded-lg ${
                activeTab === 'profile' ? 'bg-emerald-100 text-emerald-700' : ''
              }`}
            >
              Account
            </button>

            <button
              onClick={() => setActiveTab('address')}
              className={`w-full text-left px-3 py-2 rounded-lg ${
                activeTab === 'address' ? 'bg-emerald-100 text-emerald-700' : ''
              }`}
            >
              Address
            </button>

            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">
              Orders
            </button>

            <button className="w-full text-left px-3 py-2 rounded-lg text-red-500 hover:bg-red-50">
              Logout
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="bg-white rounded-2xl shadow p-6">
          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <>
              <h2 className="text-lg font-bold mb-4">Account Details</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  placeholder="Age"
                  value={form.age}
                  onChange={(e) => handleChange('age', e.target.value)}
                  className="border rounded-xl px-4 py-3"
                />

                <select
                  value={form.gender}
                  onChange={(e) => handleChange('gender', e.target.value)}
                  className="border rounded-xl px-4 py-3"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </>
          )}

          {/* ADDRESS TAB */}
          {activeTab === 'address' && (
            <>
              <h2 className="text-lg font-bold mb-4">Address</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  placeholder="Province"
                  value={form.province}
                  onChange={(e) => handleChange('province', e.target.value)}
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  placeholder="City"
                  value={form.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  placeholder="Barangay"
                  value={form.barangay}
                  onChange={(e) => handleChange('barangay', e.target.value)}
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  placeholder="Street"
                  value={form.street}
                  onChange={(e) => handleChange('street', e.target.value)}
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  placeholder="Landmark"
                  value={form.land_mark}
                  onChange={(e) => handleChange('land_mark', e.target.value)}
                  className="border rounded-xl px-4 py-3 col-span-2"
                />
              </div>
            </>
          )}

          {/* SAVE BUTTON */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-6 bg-[#064e3b] text-white px-6 py-3 rounded-xl font-bold"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}
