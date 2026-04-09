"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menu } from "@/lib/menu";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-5 fixed">
      <div className="w-full flex flex-col justify-center items-center ">
        <img src="/images/logo2.png" alt="" className="w-20 h-20 " />
        <h1
          className={`${poppins.className} flex items-center gap-3 px-4 py-2 rounded-lg font-black transition italic`}
        >
          Ishabella
        </h1>
      </div>
      <nav className="space-y-2 mt-6">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition ${
                active ? "bg-blue-600" : "hover:bg-gray-800"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
