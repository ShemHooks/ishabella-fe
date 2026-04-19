'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Search, UserCheck, UserMinus, LayoutGrid, Table2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { getEmployeeList } from '@/server/api/adminFeatures';
import { getRoleList } from '@/server/api/app';

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<any[]>([]);
  const [roles, setRoles] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const [viewMode, setViewMode] = useState('table');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // ✅ NEW
  const [perPage, setPerPage] = useState(10);

  const fetchEmployees = async () => {
    try {
      setLoading(true);

      const params: any = {
        page,
        per_page: perPage,
      };

      if (search.trim()) params.search = search;
      if (selectedRole) params.role = selectedRole;

      const res = await getEmployeeList(params);

      const data = res?.data?.data || [];
      const meta = res?.data?.meta || {};

      setEmployees(data);
      setTotalPages(meta.last_page || 1);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchRoles = async () => {
    try {
      const res = await getRoleList();
      setRoles(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchEmployees();
    }, 400);

    return () => clearTimeout(delay);
  }, [search, selectedRole, page, perPage]);

  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              Employee <span className="text-black">Registry</span>
            </h2>
            <p className="text-emerald-800/60 font-bold text-xs uppercase tracking-widest mt-1">
              Grounded in Commitment, Driven by Action
            </p>
          </div>

          <Link href="/admin/employee/create">
            <Button className="bg-[#064e3b] hover:bg-emerald-600 text-white px-8 py-6 rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-2 shadow-lg">
              <Plus size={18} /> Add New Asset
            </Button>
          </Link>
        </div>

        {/* SEARCH + FILTER */}
        <div className="flex flex-wrap gap-3 mb-6">
          {/* per page */}
          <div className="relative  max-w-md">
            <select
              value={perPage}
              onChange={(e) => {
                setPerPage(Number(e.target.value));
                setPage(1);
              }}
              className=" bg-white border-2 border-emerald-900/5 pl-2  py-3 rounded-xl focus:outline-none focus:border-emerald-500 font-bold text-sm"
            >
              <option value={5}>5 / page</option>
              <option value={10}>10 / page</option>
              <option value={20}>20 / page</option>
              <option value={50}>50 / page</option>
            </select>
          </div>
          {/* SEARCH */}
          <div className="relative flex-grow max-w-md">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900/40"
              size={18}
            />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search by name or email..."
              className="w-full bg-white border-2 border-emerald-900/5 pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500 font-bold text-sm"
            />
          </div>

          {/* ROLE FILTER */}
          <select
            value={selectedRole}
            onChange={(e) => {
              setSelectedRole(e.target.value);
              setPage(1);
            }}
            className="bg-white border-2 border-emerald-900/5 px-4 py-3 rounded-xl font-black uppercase text-[10px]"
          >
            <option value="">All Roles</option>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>

          {/* ✅ ICON VIEW TOGGLE */}
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode(viewMode === 'table' ? 'card' : 'table')}
              className={`p-3 rounded-xl ${
                viewMode === 'table'
                  ? 'bg-[#064e3b] text-white'
                  : 'bg-white border-2 border-emerald-900/5'
              }`}
            >
              {viewMode === 'table' ? <LayoutGrid size={18} /> : <Table2 size={18} />}
            </button>
          </div>
        </div>

        {/* DISPLAY (UNCHANGED) */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border">
          {loading ? (
            <div className="p-10 text-center text-sm font-bold text-gray-400">
              Loading employees...
            </div>
          ) : employees.length === 0 ? (
            <div className="p-10 text-center text-sm font-bold text-gray-400">
              No employees found
            </div>
          ) : (
            <>
              {viewMode === 'table' && (
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#064e3b] text-white">
                    <tr>
                      <th className="p-5 text-[10px] font-black uppercase">Employee</th>
                      <th className="p-5 text-[10px] font-black uppercase">Department</th>
                      <th className="p-5 text-[10px] font-black uppercase">Position</th>
                      <th className="p-5 text-[10px] font-black uppercase">Status</th>
                      <th className="p-5 text-[10px] font-black uppercase text-right">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {employees.map((emp) => (
                      <tr key={emp.id} className="hover:bg-emerald-50 group">
                        <td className="p-5">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center font-black">
                              {emp.full_name?.charAt(0)}
                            </div>
                            <div>
                              <div className="font-bold text-sm">{emp.full_name}</div>
                              <div className="text-xs text-gray-400">{emp.user.email}</div>
                            </div>
                          </div>
                        </td>

                        <td className="p-5">{emp.department}</td>
                        <td className="p-5">{emp.position}</td>

                        <td className="p-5">
                          <span
                            className={`px-3 py-1 flex gap-1 rounded-full text-xs font-bold ${
                              emp.status === 'active'
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-red-100 text-red-700'
                            }`}
                          >
                            {emp.status === 'active' ? (
                              <UserCheck size={12} />
                            ) : (
                              <UserMinus size={12} />
                            )}
                            {emp.status}
                          </span>
                        </td>

                        <td className="p-5 text-right">
                          <Link href={`/admin/employee/${emp.id}`}>
                            <button className="text-xs text-emerald-600">View</button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {viewMode === 'card' && (
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {employees.map((emp) => (
                    <div key={emp.id} className="border rounded-xl p-4 hover:shadow-lg transition">
                      {/* unchanged */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center font-black">
                          {emp.full_name?.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-sm">{emp.full_name}</div>
                          <div className="text-xs text-gray-400">{emp.user.email}</div>
                        </div>
                      </div>

                      <div className="text-xs text-gray-500 mb-1">{emp.department}</div>
                      <div className="text-sm font-bold mb-3">{emp.position}</div>

                      <span className="px-3 py-1 inline-flex gap-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
                        {emp.status}
                      </span>

                      <div className="mt-4 text-right">
                        <Link href={`/admin/employee/${emp.id}`}>
                          <button className="text-xs text-emerald-600">View</button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* ✅ PAGINATION + PER PAGE */}
        <div className="flex justify-end items-center mt-6 flex-wrap gap-3">
          {/* pagination */}
          <div className="flex gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-3 py-2 text-xs font-bold bg-white border rounded disabled:opacity-40"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`px-3 py-2 text-xs font-bold rounded ${
                  page === p ? 'bg-[#064e3b] text-white' : 'bg-white border'
                }`}
              >
                {p}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-3 py-2 text-xs font-bold bg-white border rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-400 text-center">
          Building the future through teamwork.
        </p>
      </div>
    </div>
  );
}
