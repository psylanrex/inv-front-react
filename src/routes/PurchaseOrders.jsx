import React from "react";
import { Routes, Route } from "react-router-dom";

// import layout admin
import AdminLayout from "@/components/layouts/AdminLayout";

// import purchase
import { StockCheckOrders, OpenOrders, PendingOrders, ClosedOrders } from "@/pages/purchase-orders/";

export default function PurchaseOrders() {
    return (
        <AdminLayout>
            <Routes>
                {/* Purchase Orders */}
                <Route exact path="/stock-check/*" element={<StockCheckOrders />} />
                <Route exact path="/pending/*" element={<PendingOrders />} />
                <Route exact path="/open/*" element={<OpenOrders />} />
                <Route exact path="/closed/*" element={<ClosedOrders />} />
            </Routes>
        </AdminLayout>
    )
}