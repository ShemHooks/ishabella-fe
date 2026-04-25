import {
  LayoutDashboard,
  Boxes,
  ArrowRightLeft,
  ClipboardList,
  AlertTriangle,
  RefreshCcw,
} from "lucide-react";

export const customerMenu = [
  { name: "Shop", icon: LayoutDashboard, path: "/customer/shop" },
  { name: "Sectorsidebar", icon: Boxes, path: "/customer/sectorsidebar" },
  { name: "Movements", icon: ClipboardList, path: "/customer/movement" },
  { name: "Transfers", icon: ArrowRightLeft, path: "/customer/transfer" },
  { name: "Adjustments", icon: RefreshCcw, path: "/customer/adjustment" },
  { name: "Low Stock", icon: AlertTriangle, path: "/customer/low-stock" },
];
