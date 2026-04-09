"use client";

import { Button } from "@/components/ui/button";

export default function CreateEmployeePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Create Employee</h1>

      <div className="bg-white p-6 rounded shadow max-w-3xl space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm">Full Name</label>
          <input className="border p-2 w-full rounded" />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm">Email</label>
          <input type="email" className="border p-2 w-full rounded" />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm">Password</label>
          <input type="password" className="border p-2 w-full rounded" />
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm">Role</label>
          <select className="border p-2 w-full rounded">
            <option>Technician</option>
            <option>Sales Agent</option>
            <option>Accountant</option>
            <option>Inventory Manager</option>
          </select>
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm">Department</label>
          <input className="border p-2 w-full rounded" />
        </div>

        {/* Position */}
        <div>
          <label className="block text-sm">Position</label>
          <input className="border p-2 w-full rounded" />
        </div>

        {/* Salary */}
        <div>
          <label className="block text-sm">Salary</label>
          <input type="number" className="border p-2 w-full rounded" />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm">Status</label>
          <select className="border p-2 w-full rounded">
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <Button>Create Employee</Button>
        </div>
      </div>
    </div>
  );
}
