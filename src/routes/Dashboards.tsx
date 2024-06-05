import { Routes, Route } from "react-router-dom";
import AdminLayout from "@/components/layouts/AdminLayout";
import {
  DamagedItems,
  Dashboard,
  ReturnedRate,
  BadRating,
  GoodRating,
} from "@/pages/dashboard";

export default function Dashboards() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/returned-rate" element={<ReturnedRate />} />
        <Route path="/damaged-items" element={<DamagedItems />} />
        <Route path="/bad-rating" element={<BadRating />} />
        <Route path="/good-rating" element={<GoodRating />} />
      </Routes>
    </AdminLayout>
  );
}
