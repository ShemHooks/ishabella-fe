"use client";

import { Button } from "@/components/ui/button";

export default function ViewEmployeePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Employee Details</h1>

      <div className="bg-white p-6 rounded shadow max-w-3xl space-y-4">
        <div>
          <label className="text-sm">Full Name</label>
          <input
            className="border p-2 w-full rounded"
            defaultValue="John Doe"
          />
        </div>

        <div>
          <label className="text-sm">Email</label>
          <input
            className="border p-2 w-full rounded"
            defaultValue="john@mail.com"
          />
        </div>

        <div>
          <label className="text-sm">Role</label>
          <select className="border p-2 w-full rounded">
            <option>Technician</option>
            <option>Sales Agent</option>
          </select>
        </div>

        <div>
          <label className="text-sm">Department</label>
          <input
            className="border p-2 w-full rounded"
            defaultValue="Operations"
          />
        </div>

        <div>
          <label className="text-sm">Position</label>
          <input
            className="border p-2 w-full rounded"
            defaultValue="Installer"
          />
        </div>

        <div>
          <label className="text-sm">Salary</label>
          <input
            type="number"
            className="border p-2 w-full rounded"
            defaultValue="15000"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <Button>Update</Button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
