export default function LowStockPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-red-600">Low Stock Items</h1>

      <div className="bg-white p-4 rounded shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th>Product</th>
              <th>Remaining</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td>Battery Pack</td>
              <td className="text-red-500">3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
