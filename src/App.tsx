import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// layouts
import Admin from "@/views/Admin";
import Auth from "@/views/Auth";
import AuthCover from "@/views/AuthCover";
import AuthIlustration from "@/views/AuthIlustration";
import Landing from "@/views/Landing";
import Maintenance from "@/views/Maintenance";
import AdminCompact from "@/views/AdminCompact";
import Sidedark from "@/views/Sidedark";
import Dashboard from "@/pages/dashboard/Dashboard";
import PurchaseOrders from "./routes/PurchaseOrders";
import Invoices from "./routes/Invoices";
import ManageItems from "./routes/ManageItems";
import Earnings from "./routes/Earnings";
import Support from "./pages/support/Support";
import Faq from "./pages/faq/Faq";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const adminRoutes = [
  { path: "/*", index: true, element: <Admin /> },
  { path: "/compact/*", element: <AdminCompact /> },
  { path: "/side-dark/*", element: <Sidedark /> },
  { path: "/auth/*", element: <Auth /> },
  { path: "/auth2/*", element: <AuthCover /> },
  { path: "/auth3/*", element: <AuthIlustration /> },
  { path: "/landing-page/*", element: <Landing /> },
  { path: "/maintenance/*", element: <Maintenance /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/purchase-orders/*", element: <PurchaseOrders /> },
  { path: "/invoices/*", element: <Invoices /> },
  { path: "/manage-items/*", element: <ManageItems /> },
  { path: "/earnings/*", element: <Earnings /> },
  { path: "/support", element: <Support /> },
  { path: "/faq", element: <Faq /> },
];

const loginRoutes = [
  { path: "/*", index: true, element: <Navigate to="/auth/login" /> },
  { path: "/auth/*", element: <AuthIlustration /> },
];

type RouteData = {
  path: string;
  index?: boolean;
  element: React.ReactNode;
};

export default function App() {
  const [routes, setRoutes] = useState<RouteData[]>([]);

  useEffect(() => {
    setRoutes(loginRoutes);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* add routes with layouts */}
        {routes.map((route, index) => (
          <Route key={index} index={route.index} {...route} />
        ))}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
