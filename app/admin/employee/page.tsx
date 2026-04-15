"use client";
import React from "react";
import Link from "next/link";
import { 
  Plus, 
  Search, 
  Filter, 
  UserCheck, 
  UserMinus, 
  MoreHorizontal, 
  Briefcase 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmployeesPage() {
  const employees = [
    { id: 1, name: "Jovy Villanueva", email: "jovy@ishabella.com", role: "Sales Agent", dept: "Sales", status: "Active" },
    { id: 2, name: "Rocky Dela Pena", email: "rocky@ishabella.com", role: "Sales Agent", dept: "Sales", status: "Active" },
    { id: 3, name: "Arnold Ortiz", email: "arnold@ishabella.com", role: "Technician", dept: "Operations", status: "Active" },
    { id: 4, name: "Michael Plaza", email: "mike@ishabella.com", role: "Accountant", dept: "Finance", status: "Inactive" },
  ];

  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - High Contrast "Execution" Style */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-black  uppercase tracking-tighter">
             Employee <span className="text-black">Registry</span>
        </h2>
            <p className="text-emerald-800/60 font-bold text-xs uppercase tracking-widest mt-1">
              Grounded in Commitment, Driven by Action
            </p>
          </div>
          
          <Link href="/admin/employee/create">
            <Button className="bg-[#064e3b] hover:bg-emerald-600 text-white px-8 py-6 rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-2 shadow-lg transition-all active:scale-95">
              <Plus size={18} /> Add New Asset
            </Button>
          </Link>
        </div>

        {/* Search + Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900/40" size={18} />
            <input
              placeholder="Search by name or email..."
              className="w-full bg-white border-2 border-emerald-900/5 pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500 transition-all font-bold text-sm shadow-sm"
            />
          </div>

          <select className="bg-white border-2 border-emerald-900/5 px-4 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest text-emerald-900 focus:outline-none focus:border-emerald-500 shadow-sm cursor-pointer">
            <option>All Roles</option>
            <option>Technician</option>
            <option>Sales Agent</option>
            <option>Accountant</option>
          </select>

          <button className="bg-white border-2 border-emerald-900/5 p-3 rounded-xl text-emerald-900 hover:bg-emerald-50 transition-colors shadow-sm">
            <Filter size={20} />
          </button>
        </div>

        {/* Employee Table Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-emerald-900/5">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#064e3b] text-white">
              <tr>
                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Employee Details</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Department</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Role</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Status</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em] text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-emerald-900/5">
              {employees.map((emp) => (
                <tr key={emp.id} className="hover:bg-emerald-50/50 transition-colors group">
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center font-black text-emerald-700">
                        {emp.name.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-black text-sm text-gray-800 tracking-tight">{emp.name}</span>
                        <span className="text-xs font-bold text-gray-400">{emp.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-2">
                      <Briefcase size={14} className="text-emerald-500/50" />
                      <span className="text-sm font-bold text-gray-600">{emp.dept}</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-900/70">{emp.role}</span>
                  </td>
                  <td className="p-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                      emp.status === 'Active' 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-rose-100 text-rose-700'
                    }`}>
                      {emp.status === 'Active' ? <UserCheck size={12}/> : <UserMinus size={12}/>}
                      {emp.status}
                    </span>
                  </td>
                  <td className="p-5 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href={`/admin/employee/${emp.id}`}>
                        <button className="text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-800 bg-emerald-50 px-3 py-2 rounded-lg transition-colors">
                          View Profile
                        </button>
                      </Link>
                      <button className="text-gray-400 p-2 hover:bg-gray-100 rounded-lg">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">
          Building the future of solar and cooling through relentless teamwork.
        </p>
      </div>
    </div>
  );
}