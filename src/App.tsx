import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// layouts
import Admin from "@/views/Admin";
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
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useAsyncEffect } from "ahooks";
import { accountProfile } from "@/api/account";
import { getAccessToken } from "@/utils/utils";
import to from "await-to-js";
import { updateProfile } from "@/slices/profileSlice";

type RouteData = {
  path: string;
  index?: boolean;
  element: React.ReactNode;
};

export default function App() {
  const profile = useSelector((state: RootState) => state.profile);
  const [routes, setRoutes] = useState<RouteData[]>([]);
  const dispatch = useDispatch();

  const adminRoutes = [
    { path: "/*", index: true, element: <Admin /> },
    { path: "/compact/*", element: <AdminCompact /> },
    { path: "/side-dark/*", element: <Sidedark /> },
    { path: "/landing-page/*", element: <Landing /> },
    { path: "/maintenance/*", element: <Maintenance /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/purchase-orders/*", element: <PurchaseOrders /> },
    { path: "/invoices/*", element: <Invoices /> },
    { path: "/manage-items/*", element: <ManageItems /> },
    { path: "/earnings/*", element: <Earnings /> },
    { path: "/support", element: <Support /> },
    { path: "/faq", element: <Faq /> },
    { path: "/auth/login", element: <Navigate to="/" /> },
  ];
  const loginRoutes = [
    { path: "/*", index: true, element: <Navigate to="/auth/login" /> },
    { path: "/auth/*", element: <AuthIlustration /> },
  ];

  useAsyncEffect(async () => {
    const { token } = getAccessToken();

    if (token && !profile.id) {
      const [err, account] = await to(accountProfile());
      if (err) return;

      dispatch(updateProfile(account!));
      setRoutes(adminRoutes);
      return;
    }

    if (!profile.id) {
      setRoutes(loginRoutes);
      return;
    }

    setRoutes(adminRoutes);
  }, [profile]);

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
