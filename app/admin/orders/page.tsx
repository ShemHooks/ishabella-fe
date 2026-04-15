import React from "react";
import { Search, Filter, MoreVertical, CheckCircle2, Clock, AlertCircle, FileText } from "lucide-react";

const order = () => {
  const orders = [
    { id: "DR-2026-001", client: "Tele Tech Inc.", date: "Feb 12, 2026", amount: "₱4,300", status: "Delivered", payment: "Paid" },
    { id: "DR-2026-002", client: "Visilble Industrial", date: "Feb 14, 2026", amount: "₱8,000", status: "In Progress", payment: "Pending" },
    { id: "DR-2026-003", client: "Manly Plastics", date: "Feb 15, 2026", amount: "₱6,400", status: "Pending", payment: "Overdue" },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex flex-col md:row justify-between items-end mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black  uppercase tracking-tighter">
          Processing <span className="text-black">Orders</span>
        </h1>
            
            <p className="text-emerald-800/60 font-bold text-xs uppercase tracking-widest"></p>
          </div>
          
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search Client or DR#" 
                className="pl-10 pr-4 py-2 border-2 border-emerald-900/10 rounded-lg bg-white focus:outline-none focus:border-emerald-500 transition-all text-sm font-bold"
              />
            </div>
            <button className="bg-emerald-900 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors">
              <Filter size={20} />
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-emerald-900/5">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#064e3b] text-white">
              <tr>
                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Order Ref</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Client</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Amount</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Logistics</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Payment</th>
                <th className="p-5 text-[10px] font-black uppercase tracking-[0.2em]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-900/5">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-emerald-50/50 transition-colors group">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
                        <FileText size={18} />
                      </div>
                      <span className="font-black text-sm text-gray-800">{order.id}</span>
                    </div>
                  </td>
                  <td className="p-5 font-bold text-gray-600 text-sm">{order.client}</td>
                  <td className="p-5 font-black text-emerald-900">{order.amount}</td>
                  <td className="p-5">
                    <span className={`flex items-center gap-1.5 text-[10px] font-black uppercase px-3 py-1 rounded-full ${
                      order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {order.status === 'Delivered' ? <CheckCircle2 size={12}/> : <Clock size={12}/>}
                      {order.status}
                    </span>
                  </td>
                  <td className="p-5">
                    <span className={`text-[10px] font-black uppercase ${
                      order.payment === 'Paid' ? 'text-emerald-500' : 'text-rose-500 flex items-center gap-1'
                    }`}>
                      {order.payment === 'Overdue' && <AlertCircle size={12}/>}
                      {order.payment}
                    </span>
                  </td>
                  <td className="p-5">
                    <button className="text-gray-400 hover:text-emerald-600 transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default order;