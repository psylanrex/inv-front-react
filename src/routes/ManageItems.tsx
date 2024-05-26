import { Routes, Route } from "react-router-dom";

// import layout admin
import AdminLayout from "@/components/layouts/AdminLayout";

// import manage items
import {
  AddItems,
  ViewEditItems,
  HDImageUpload,
  RejectedImages,
} from "@/pages/manage-items/";

export default function ManageItems() {
  return (
    <AdminLayout>
      <Routes>
        {/* Manage Items */}
        <Route path="/*" element={<AddItems />} />
        <Route path="/add/*" element={<AddItems />} />
        <Route path="/view-edit/*" element={<ViewEditItems />} />
        <Route path="/hd-images/*" element={<HDImageUpload />} />
        <Route path="/rejected-images/*" element={<RejectedImages />} />
      </Routes>
    </AdminLayout>
  );
}
