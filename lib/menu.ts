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
  { name: "Orders", icon: ShoppingCart, path: "/orders" },
  { name: "Employees", icon: Users, path: "/admin/employee" },
  { name: "Inventory", icon: Warehouse, path: "/inventory" },
  { name: "Reports", icon: BarChart3, path: "/reports" },
];
