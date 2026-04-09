export default function MovementsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Stock Movements</h1>

      <div className="bg-white p-4 rounded shadow">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th>Date</th>
              <th>Product</th>
              <th>Type</th>
              <th>Qty</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td>2026-04-06</td>
              <td>Solar Panel</td>
              <td className="text-green-600">IN</td>
              <td>+20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
