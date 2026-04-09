"use client";

export default function Topbar() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between">
      <h2 className="text-lg font-semibold">Admin Panel</h2>

      <div className="flex items-center gap-4">
        <span className="text-sm">Admin</span>
        <button className="bg-red-500 text-white px-3 py-1 rounded">
          Logout
        </button>
      </div>
    </header>
  );
}
