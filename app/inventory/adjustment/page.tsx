import { Button } from "@/components/ui/button";
export default function AdjustmentsPage() {
  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Stock Adjustments</h1>
        <Button>New Adjustment</Button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <p>No adjustments yet.</p>
      </div>
    </div>
  );
}
