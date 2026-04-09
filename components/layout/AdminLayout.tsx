import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 flex flex-col pl-64">
        <Topbar />

        <main className="p-6 bg-gray-100 min-h-screen">{children}</main>
      </div>
    </div>
  );
}
