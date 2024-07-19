import { Routes, Route } from "react-router-dom";

// import layout admin
import AdminLayout from "@/components/layouts/AdminLayout";

// import purchase
import {
  StockCheckOrders,
  OpenOrders,
  PendingOrders,
  ClosedOrders,
  OpenOrderDetails,
  PendingOrderDetails,
} from "@/pages/purchase-orders";

export default function PurchaseOrders() {
  return (
    <AdminLayout>
      <Routes>
        {/* Purchase Orders */}
        <Route path="/open/details/:order_id" element={<OpenOrderDetails />} />
        <Route
          path="/pending/details/:order_id"
          element={<PendingOrderDetails />}
        />
        <Route path="/stock-check/*" element={<StockCheckOrders />} />
        <Route path="/pending/*" element={<PendingOrders />} />
        <Route path="/open/*" element={<OpenOrders />} />
        <Route path="/closed/*" element={<ClosedOrders />} />
      </Routes>
    </AdminLayout>
  );
}
