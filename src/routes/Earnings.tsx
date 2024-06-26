import { Routes, Route } from "react-router-dom";

// import layout admin
import AdminLayout from "@/components/layouts/AdminLayout";

// import earning
import { OwedEarnings, PaidEarnings } from "@/pages/earnings/";

export default function Earning() {
  return (
    <AdminLayout>
      <Routes>
        {/* Earnings */}
        <Route path="/owed/*" element={<OwedEarnings />} />
        <Route path="/paid/*" element={<PaidEarnings />} />
      </Routes>
    </AdminLayout>
  );
}
