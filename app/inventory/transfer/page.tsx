import { Button } from "@/components/ui/button";

export default function TransfersPage() {
  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Warehouse Transfers</h1>
        <Button>New Transfer</Button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <p>No transfers yet.</p>
      </div>
    </div>
  );
}
