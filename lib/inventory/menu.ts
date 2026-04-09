import {
  LayoutDashboard,
  Boxes,
  ArrowRightLeft,
  ClipboardList,
  AlertTriangle,
  RefreshCcw,
} from "lucide-react";

export const inventoryMenu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/inventory/dashboard" },
  { name: "Stocks", icon: Boxes, path: "/inventory/stocks" },
  { name: "Movements", icon: ClipboardList, path: "/inventory/movements" },
  { name: "Transfers", icon: ArrowRightLeft, path: "/inventory/transfers" },
  { name: "Adjustments", icon: RefreshCcw, path: "/inventory/adjustments" },
  { name: "Low Stock", icon: AlertTriangle, path: "/inventory/low-stock" },
];
