import React from "react";
import { Routes, Route } from "react-router-dom";

// import layout admin
import AdminLayout from "@/components/layouts/AdminLayout";

// import manage items
import { AddItems, ViewEditItems, HDImageUpload, RejectedImages } from "@/pages/manage-items/";

export default function ManageItems() {
    return (
        <AdminLayout>
            <Routes>
                {/* Manage Items */}
                <Route path="/*" element={<AddItems />} />
                <Route exact path="/add/*" element={<AddItems />} />
                <Route exact path="/view-edit/*" element={<ViewEditItems />} />
                <Route exact path="/hd-images/*" element={<HDImageUpload />} />
                <Route exact path="/rejected-images/*" element={<RejectedImages />} />
            </Routes>
        </AdminLayout>
    )
}