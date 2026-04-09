import { Button } from "@/components/ui/button";

export default function StocksPage() {
  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Stocks</h1>
        <Button>Stock In</Button>
      </div>

      <div className="bg-white rounded shadow p-4">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th>Product</th>
              <th>Warehouse</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td>Solar Panel 550W</td>
              <td>Main Warehouse</td>
              <td>120</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
