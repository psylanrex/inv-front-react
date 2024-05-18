import { Routes, Route } from "react-router-dom";

// import layout admin
import AdminLayout from "@/components/layouts/AdminLayout";

// import purchase
import {
  PendingInvoices,
  ShippedInvoices,
  ReceivedInvoices,
  CancelledInvoices,
} from "@/pages/invoices/";

export default function Invoices() {
  return (
    <AdminLayout>
      <Routes>
        {/* Invoices */}
        <Route path="/pending/*" element={<PendingInvoices />} />
        <Route path="/shipped/*" element={<ShippedInvoices />} />
        <Route path="/received/*" element={<ReceivedInvoices />} />
        <Route path="/cancelled/*" element={<CancelledInvoices />} />
      </Routes>
    </AdminLayout>
  );
}
