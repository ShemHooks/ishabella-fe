'use client';

import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BranchPage() {
  const [branches, setBranches] = useState([
    { id: 1, name: 'Bacolod Main Branch', location: 'Bacolod City', status: 'active' },
    { id: 2, name: 'Kabankalan Branch', location: 'Kabankalan City', status: 'active' },
    { id: 3, name: 'Dumaguete Branch', location: 'Negros Oriental', status: 'inactive' },
  ]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<any>(null);

  const handleEditClick = (branch: any) => {
    setSelectedBranch(branch);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (branch: any) => {
    setSelectedBranch(branch);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setBranches(branches.filter((b) => b.id !== selectedBranch.id));
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <p className="text-emerald-800/60 font-bold text-xs uppercase tracking-widest mt-1">
              Manage your company locations
            </p>
          </div>

          <Button className="bg-[#064e3b] hover:bg-emerald-600 text-white px-8 py-6 rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-2 shadow-lg">
            <Plus size={18} /> Add Branch
          </Button>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-emerald-900/5">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#064e3b] text-white">
              <tr>
                <th className="p-5 text-[10px] font-black uppercase">Branch Name</th>
                <th className="p-5 text-[10px] font-black uppercase">Location</th>
                <th className="p-5 text-[10px] font-black uppercase">Status</th>
                <th className="p-5 text-[10px] font-black uppercase text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {branches.map((branch) => (
                <tr key={branch.id} className="hover:bg-emerald-50 group">
                  <td className="p-5 font-bold text-[#064e3b]">{branch.name}</td>

                  <td className="p-5 text-sm">{branch.location}</td>

                  <td className="p-5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        branch.status === 'active'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {branch.status}
                    </span>
                  </td>

                  <td className="p-5">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEditClick(branch)}
                        className="p-2 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-500 hover:text-white transition"
                      >
                        <Edit2 size={16} />
                      </button>

                      <button
                        onClick={() => handleDeleteClick(branch)}
                        className="p-2 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition"
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

        <p className="mt-6 text-xs text-gray-400 text-center">Centralized branch control system.</p>
      </div>

      {/* EDIT MODAL */}
      {isEditModalOpen && selectedBranch && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-black uppercase tracking-widest text-[#064e3b]">
                Edit Branch
              </h3>
              <button onClick={() => setIsEditModalOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4">
              <input
                className="w-full p-3 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                defaultValue={selectedBranch.name}
              />

              <input
                className="w-full p-3 bg-slate-50 rounded-xl outline-none"
                defaultValue={selectedBranch.location}
              />

              <button className="w-full py-3 bg-[#064e3b] text-white font-black uppercase text-xs tracking-widest rounded-xl hover:bg-emerald-600 transition">
                Update Branch
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE MODAL */}
      {isDeleteModalOpen && selectedBranch && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-xl text-center">
            <div className="w-14 h-14 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle size={26} />
            </div>

            <h3 className="text-lg font-black uppercase text-[#064e3b]">Confirm Delete</h3>

            <p className="text-sm text-gray-500 mt-2">
              Delete <span className="font-bold text-red-500">{selectedBranch.name}</span>?
            </p>

            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="flex-1 py-2 text-sm font-bold text-gray-400"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="flex-1 py-2 bg-red-500 text-white text-xs font-black uppercase rounded-xl"
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
