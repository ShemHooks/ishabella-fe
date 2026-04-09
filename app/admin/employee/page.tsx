"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EmployeesPage() {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Employees</h1>
        <Link href="/admin/employee/create">
          <Button>Add Employee</Button>
        </Link>
      </div>

      {/* Search + Filter */}
      <div className="flex gap-4 mb-4">
        <input
          placeholder="Search employee..."
          className="border p-2 rounded w-64"
        />

        <select className="border p-2 rounded">
          <option>All Roles</option>
          <option>Technician</option>
          <option>Sales Agent</option>
          <option>Accountant</option>
        </select>

        <select className="border p-2 rounded">
          <option>Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow">
        <table className="w-full">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Department</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-3">John Doe</td>
              <td>john@mail.com</td>
              <td>Technician</td>
              <td>Operations</td>
              <td className="text-green-600">Active</td>
              <td>
                <Link href="/admin/employee/1" className="text-blue-600">
                  View
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
