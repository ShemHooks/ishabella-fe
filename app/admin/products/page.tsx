export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="bg-white p-4 rounded shadow">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th>Name</th>
              <th>SKU</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td>Solar Panel 550W</td>
              <td>SP-001</td>
              <td>₱15,000</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
