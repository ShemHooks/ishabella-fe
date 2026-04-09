export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded shadow">
          <h3>Total Sales</h3>
          <p className="text-xl font-bold">₱120,000</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>Orders</h3>
          <p className="text-xl font-bold">320</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>Products</h3>
          <p className="text-xl font-bold">85</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>Low Stock</h3>
          <p className="text-xl font-bold text-red-500">5</p>
        </div>
      </div>
    </div>
  );
}
