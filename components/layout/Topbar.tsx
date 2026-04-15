"use client";

import { Bell, User, LogOut, ChevronRight, Zap } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Topbar() {
  const pathname = usePathname();
  
  // Clean up the path for the breadcrumb (e.g., /admin/employee -> Employee)
  const currentPath = pathname.split("/").pop()?.replace(/-/g, " ") || "Dashboard";

  return (
    <header className="bg-white border-b border-emerald-900/5 h-16 flex justify-between items-center px-8 sticky top-0 z-40">
      
      {/* Tactical Breadcrumb */}
      <div className="flex items-center gap-3">
        <div className="bg-emerald-500 p-1.5 rounded-lg text-white shadow-sm shadow-emerald-200">
          <Zap size={16} fill="currentColor" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-900/30">
            Ishabella
          </span>
          <ChevronRight size={12} className="text-emerald-900/20" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900 italic">
            {currentPath}
          </span>
        </div>
      </div>

      {/* Profile & Actions */}
      <div className="flex items-center gap-6">
        
        {/* Alerts - Connection to your "Collectibles" and "Stock" data */}
        <button className="relative text-emerald-900/40 hover:text-emerald-600 transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-rose-500 text-white text-[8px] font-black rounded-full flex items-center justify-center border-2 border-white">
            3
          </span>
        </button>

        <div className="h-8 w-[1px] bg-emerald-900/5" />

        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="text-right">
            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-900">
              Admin Chief
            </p>
            <p className="text-[9px] font-bold text-emerald-500/60 uppercase tracking-tighter">
              Verified User
            </p>
          </div>
          
          <div className="relative">
            <div className="h-10 w-10 rounded-xl bg-emerald-900 flex items-center justify-center text-emerald-400 font-black shadow-lg shadow-emerald-900/20 group-hover:scale-105 transition-transform">
              <User size={20} />
            </div>
            <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-emerald-400 border-2 border-white rounded-full" />
          </div>

          {/* Logout - Integrated style */}
          <button className="ml-2 p-2 text-emerald-900/30 hover:text-rose-600 transition-colors">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}