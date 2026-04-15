"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menu } from "@/lib/menu";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
});

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-emerald-900 text-white h-screen flex flex-col fixed border-r border-white/5">
      {/* Brand Header Section */}
      <div className="p-8 flex flex-col items-center border-b border-white/5 bg-emerald-700">
        <img 
          src="/images/logo.png" 
          alt="Ishabella Logo" 
          className="w-35 h-25 object-contain mb-4 drop-shadow-2xl" 
        />
        <div className="text-center">
          <h1 className={`${poppins.className} text-xl font-black  uppercase tracking-tighter text-emerald-500`}>
            Ishabella
          </h1>
          <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/100 mt-1">
            Execution Portal
          </p>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="p-4 ">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                active 
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-900/50" 
                  : "text-emerald-100/100 hover:bg-white/5 hover:text-white"
              }`}
            >
              {/* Active Indicator Accent */}
              {active && (
                <div className="absolute left-0 w-1 h-6 bg-white rounded-r-full" />
              )}
              
              <Icon 
                size={20} 
                className={`${active ? "text-white" : "group-hover:text-emerald-400"} transition-colors`} 
              />
              
              <span className="text-xs font-black uppercase tracking-widest">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* System Status Footer */}
      <div className="p-6 bg-emerald-900 border-t border-white/5">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-2 w-2 rounded-full bg-emerald-700 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
            System Online
          </span>
        </div>
        <p className="text-[9px] font-bold text-white/50 uppercase">
          © 2026 ISHABELLA CORP
        </p>
      </div>
    </aside>
  );
}