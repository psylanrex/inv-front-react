import React from "react";
import { Routes, Route } from "react-router-dom";

// import layout admin
import AdminLayout from "@/components/layouts/AdminLayout";

// import purchase
import { PendingInvoices, ShippedInvoices, ReceivedInvoices, CancelledInvoices } from "@/pages/invoices/";

export default function Invoices() {
    return (
        <AdminLayout>
            <Routes>
                {/* Invoices */}
                <Route exact path="/pending/*" element={<PendingInvoices />} />
                <Route exact path="/shipped/*" element={<ShippedInvoices />} />
                <Route exact path="/received/*" element={<ReceivedInvoices />} />
                <Route exact path="/cancelled/*" element={<CancelledInvoices />} />
            </Routes>
        </AdminLayout>
    )
}