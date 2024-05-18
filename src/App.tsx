import { BrowserRouter, Routes, Route } from "react-router-dom";

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

const routes = [
  { path: "/*", element: (isAuthenticated) => <Admin /> },
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* add routes with layouts */}
        <Route path="/*" element={<Admin />} />
        <Route path="/compact/*" element={<AdminCompact />} />
        <Route path="/side-dark/*" element={<Sidedark />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/auth2/*" element={<AuthCover />} />
        <Route path="/auth3/*" element={<AuthIlustration />} />
        <Route path="/landing-page/*" element={<Landing />} />
        <Route path="/maintenance/*" element={<Maintenance />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/purchase-orders/*" element={<PurchaseOrders />} />
        <Route path="/invoices/*" element={<Invoices />} />
        <Route path="/manage-items/*" element={<ManageItems />} />
        <Route path="/earnings/*" element={<Earnings />} />
        <Route path="/support" element={<Support />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}
