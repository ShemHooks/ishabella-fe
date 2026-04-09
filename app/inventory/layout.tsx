"use client";

import { inventoryMenu } from "@/lib/inventory-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white h-screen p-5">
        <h1 className="text-xl font-bold mb-6">Inventory</h1>

        {inventoryMenu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-3 p-3 rounded ${
                active ? "bg-blue-600" : "hover:bg-gray-800"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </aside>

      {/* Content */}
      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
}
