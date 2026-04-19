// app/stocks/stock-in/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { addStock } from "@/lib/api/stocks";

export default function StocksPage() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    productId: "",
    warehouseId: "",
    quantity: "",
    reference: "",
  });

  //   const handleSubmit = async () => {
  //     try {
  //       setLoading(true);

  //       await addStock(form.productId, {
  //         warehouse_id: form.warehouseId,
  //         quantity: Number(form.quantity),
  //         reference: form.reference,
  //       });

  //       setOpen(false);
  //       setForm({
  //         productId: "",
  //         warehouseId: "",
  //         quantity: "",
  //         reference: "",
  //       });
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Stocks</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Stock In</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Stock In Product</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <Label>Product ID</Label>
                <Input
                  value={form.productId}
                  onChange={(e) =>
                    setForm({ ...form, productId: e.target.value })
                  }
                  placeholder="Enter product UUID"
                />
              </div>

              <div>
                <Label>Warehouse ID</Label>
                <Input
                  value={form.warehouseId}
                  onChange={(e) =>
                    setForm({ ...form, warehouseId: e.target.value })
                  }
                  placeholder="Enter warehouse UUID"
                />
              </div>

              <div>
                <Label>Quantity</Label>
                <Input
                  type="number"
                  value={form.quantity}
                  onChange={(e) =>
                    setForm({ ...form, quantity: e.target.value })
                  }
                  placeholder="Enter quantity"
                />
              </div>

              <div>
                <Label>Reference</Label>
                <Textarea
                  value={form.reference}
                  onChange={(e) =>
                    setForm({ ...form, reference: e.target.value })
                  }
                  placeholder="Optional reference / notes"
                />
              </div>

              <Button
                // onClick={handleSubmit}
                disabled={loading}
                className="w-full"
              >
                {loading ? "Saving..." : "Submit Stock In"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white rounded shadow p-4">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="py-2">Product</th>
              <th>Warehouse</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-3">Solar Panel 550W</td>
              <td>Main Warehouse</td>
              <td>120</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
