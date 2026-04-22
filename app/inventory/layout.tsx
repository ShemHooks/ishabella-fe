"use client";

import { inventoryMenu } from "@/lib/inventory/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, LogOut, Terminal ,User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router= useRouter()

  return (
    /* h-screen + overflow-hidden prevents the whole body from scrolling 
       and keeps the sidebar fixed to the viewport height */
    <div className="flex h-screen w-full overflow-hidden bg-[#f8fafc]">
      
      {/* Sidebar - Fix: Changed to h-full to match parent h-screen */}
      <aside className="w-72 bg-[#022c22] text-white flex flex-col border-r border-emerald-900/20 shadow-2xl h-full shrink-0">
        
        {/* Brand Header */}
        <div className="p-8 pb-12">
          <div className="flex items-center gap-2 text-emerald-400 mb-4">
             <Terminal size={18} />
             <span className="text-[10px] font-black uppercase tracking-[0.4em]"></span>
          </div>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-white">
            Ishabella<span className="text-emerald-500">.</span>
          </h1>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-100/30 mt-1">
            
          </p>
        </div>

        {/* Navigation Registry */}
       
          
          {inventoryMenu.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`flex items-center justify-between group px-5 py-4 rounded-2xl transition-all duration-300 ${
                  active 
                    ? "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.2)]" 
                    : "hover:bg-white/5 text-emerald-100/60 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  <Icon 
                    size={20} 
                    strokeWidth={active ? 3 : 2} 
                    className={active ? "text-white" : "text-emerald-500/50 group-hover:text-emerald-400"} 
                  />
                  <span className="text-[11px] font-black uppercase tracking-widest">
                    {item.name}
                  </span>
                </div>
                {active && (
                   <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                )}
              </Link>
            );
          })}
        

        {/* Sidebar Footer */}
        <div className="p-6 mt-auto">
          <div className="bg-emerald-950/50 rounded-3xl p-5 border border-emerald-500/10">
             <div className="flex items-center gap-3 mb-3">
                <div className="bg-emerald-500 p-2 rounded-xl text-white">
                   <ShieldCheck size={16} />
                </div>
                <div>
                   <p className="text-[9px] font-black uppercase text-white tracking-widest">Security Active</p>
                   <p className="text-[8px] font-bold text-emerald-400/60 uppercase">Admin Access</p>
                </div>
             </div>
             <button className="w-full flex items-center justify-center gap-2 p-3 bg-white/5 hover:bg-rose-500/10 hover:text-rose-400 rounded-xl transition-all text-[9px] font-black uppercase tracking-[0.2em] text-emerald-100/30"onClick={()=>router.replace(
            '/'
          )}>
                <LogOut size={14} />
                Terminate Session
             </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area - Fix: h-full + overflow-y-auto ensures 
          only the content scrolls, not the whole page */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-20 border-b border-emerald-900/5 bg-white/50 backdrop-blur-md flex items-center px-10 shrink-0 justify-end">
             <div className="flex items-center gap-4">
                <div className="text-right">
                    <p className="text-[10px] font-black uppercase text-emerald-900">System Administrator</p>
                    <p className="text-[8px] font-bold text-emerald-900/40 uppercase">Inventory Node 01</p>
                </div>
                <div className="relative">
            <div className="h-10 w-10 rounded-xl bg-emerald-900 flex items-center justify-center text-emerald-400 font-black shadow-lg shadow-emerald-900/20 group-hover:scale-105 transition-transform">
              <User size={20} />
            </div>
            <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-emerald-400 border-2 border-white rounded-full" />
          </div>

             </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}