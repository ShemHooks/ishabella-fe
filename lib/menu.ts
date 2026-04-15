import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Warehouse,
  BarChart3,
} from "lucide-react";

export const menu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
  { name: "Products", icon: Package, path: "/admin/products" },
  { name: "Orders", icon: ShoppingCart, path: "/admin/orders" },
  { name: "Employees", icon: Users, path: "/admin/employee" },
  { name: "Inventory", icon: Warehouse, path: "/admin/inventory" },
  { name: "Reports", icon: BarChart3, path: "/admin/reports" },
];
