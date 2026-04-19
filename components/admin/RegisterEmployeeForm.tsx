"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getRoleList } from "@/server/api/app";
import { registerEmployee } from "@/server/api/auth";

interface roleType {
  id: string;
  name: string;
}

export default function RegisterEmployeeForm({ onClose }: any) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role_id: "",
  });

  const [loading, setLoading] = useState(false);
  const [roles, setRoles] = useState<roleType[]>([]);

  useEffect(() => {
    getListOfRole();
  }, []);

  const getListOfRole = async () => {
    try {
      const data = await getRoleList();
      setRoles(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await registerEmployee(form);
      onClose();
      return;
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-bold">Register Employee</h1>

      <input
        name="name"
        placeholder="Full Name"
        className="input w-full"
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        className="input w-full"
        onChange={handleChange}
      />

      <select name="role_id" className="input w-full" onChange={handleChange}>
        <option value="">Select Role</option>
        {roles.map((role) => (
          <option key={role.id} value={role.id}>
            {role.name}
          </option>
        ))}
      </select>

      <Button onClick={handleSubmit} disabled={loading} className="w-full">
        {loading ? "Creating..." : "Create Employee"}
      </Button>
    </div>
  );
}
