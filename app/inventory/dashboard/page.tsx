export default function InventoryDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Inventory Dashboard</h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded shadow">
          <h3>Total Items</h3>
          <p className="text-xl font-bold">120</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>Low Stock</h3>
          <p className="text-xl font-bold text-red-500">8</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>Incoming</h3>
          <p className="text-xl font-bold">25</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>Outgoing</h3>
          <p className="text-xl font-bold">40</p>
        </div>
      </div>
    </div>
  );
}
