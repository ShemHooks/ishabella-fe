'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Trash2, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import { getEmpData } from '@/server/api/adminFeatures';

type Employee = {
  id: string;
  full_name: string;
  email?: string;
  position: string;
  department: string;
  salary: string;
  employment_type: string;
  status: string;
  employee_code: string;

  birth_date: string | null;
  gender: string | null;
  phone: string | null;
  address: string | null;
  branch: string | null;
  hire_date: string | null;
  termination_date: string | null;

  user?: {
    email: string;
  };
};

export default function ViewEmployeePage() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [employeeData, setEmployeeData] = useState<Employee | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // ✅ instead of N/A
  const getValue = (val: any) => val || '';

  const getData = async () => {
    try {
      setLoading(true);
      const response = await getEmpData(id);
      setEmployeeData(response.data.data);
    } catch (error: any) {
      setError(error?.response?.data?.message || 'Failed to fetch employee');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) getData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-emerald-700 font-black">
        Loading employee data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-red-600 font-bold">
        <p>{error}</p>
        <Link href="/admin/employee" className="mt-4 text-emerald-600 underline">
          Go back
        </Link>
      </div>
    );
  }

  if (!employeeData) return null;

  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen font-sans">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Link
              href="/admin/employee"
              className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 mb-4"
            >
              <ArrowLeft size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Personnel Registry
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-black uppercase text-[#064e3b]">
                {employeeData.full_name}
              </h1>

              <div className="bg-emerald-500 text-white text-[10px] px-3 py-1 rounded-full uppercase">
                {employeeData.status}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 border text-rose-600 rounded-xl text-xs uppercase">
              <Trash2 size={16} /> Terminate
            </button>

            <Button className="flex items-center gap-2 bg-[#064e3b] text-white px-6 py-3 rounded-xl text-xs uppercase">
              <Save size={16} /> Save
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="space-y-6">
            <div className="bg-emerald-950 p-6 rounded-2xl text-white">
              <p className="text-xs text-emerald-400 mb-4">Employee Info</p>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>ID</span>
                  <span>{employeeData.employee_code}</span>
                </div>

                <div className="flex justify-between">
                  <span>Position</span>
                  <span>{employeeData.position}</span>
                </div>

                <div className="flex justify-between">
                  <span>Department</span>
                  <span>{employeeData.department}</span>
                </div>

                <div className="flex justify-between">
                  <span>Branch</span>
                  <span>{employeeData.branch || '-'}</span>
                </div>

                <div className="flex justify-between">
                  <span>Status</span>
                  <span>{employeeData.status}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border flex gap-3">
              <ShieldAlert className="text-amber-500" size={20} />
              <p className="text-xs">Changes require admin authorization.</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2 space-y-6">
            {/* PROFILE */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-sm font-bold mb-6">Identity Profile</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <input value={employeeData.full_name} readOnly className="p-3 border rounded" />

                <input
                  value={employeeData.user?.email || ''}
                  readOnly
                  className="p-3 border rounded"
                />

                <input
                  value={getValue(employeeData.birth_date)}
                  placeholder="Birth Date"
                  readOnly
                  className="p-3 border rounded placeholder:text-gray-400"
                />

                <input
                  value={getValue(employeeData.gender)}
                  placeholder="Gender"
                  readOnly
                  className="p-3 border rounded placeholder:text-gray-400"
                />

                <input
                  value={getValue(employeeData.phone)}
                  placeholder="Phone"
                  readOnly
                  className="p-3 border rounded placeholder:text-gray-400"
                />

                <input
                  value={getValue(employeeData.address)}
                  placeholder="Address"
                  readOnly
                  className="p-3 border rounded placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* JOB */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-sm font-bold mb-6">Job Details</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <input value={employeeData.position} readOnly className="p-3 border rounded" />

                <input value={employeeData.department} readOnly className="p-3 border rounded" />

                <input value={`₱ ${employeeData.salary}`} readOnly className="p-3 border rounded" />

                <input
                  value={employeeData.employment_type}
                  readOnly
                  className="p-3 border rounded"
                />

                <input
                  value={getValue(employeeData.hire_date)}
                  placeholder="Hire Date"
                  readOnly
                  className="p-3 border rounded placeholder:text-gray-400"
                />

                <input
                  value={getValue(employeeData.termination_date)}
                  placeholder="Termination Date"
                  readOnly
                  className="p-3 border rounded placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
