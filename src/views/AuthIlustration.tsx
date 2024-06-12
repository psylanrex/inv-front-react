import { Routes, Route, Navigate } from "react-router-dom";

// import auth ilustration layout
import AuthIlustrationLayout from "@/components/layouts/AuthIlustrationLayout";
// import authentication
import {
  Login,
  Register,
  Confirm,
  Forgot,
  Logout,
  ChangePassword,
} from "@/views/authentication";
import { getVendorId } from "@/utils/utils";

export default function AuthIlustration() {
  return (
    <AuthIlustrationLayout>
      <Routes>
        {/* authentication  */}
        <Route path="/register/*" element={<Register />} />
        <Route path="/logout/*" element={<Logout />} />
        <Route path="/forgot/*" element={<Forgot />} />
        <Route path="/confirm/*" element={<Confirm />} />
        <Route path="/change-password/*" element={<ChangePassword />} />
        <Route path="/:vendor_id" element={<Login />} />
        <Route
          path="/*"
          index
          element={<Navigate to={`/impersonate/${getVendorId() ?? 1}`} />}
        />
      </Routes>
    </AuthIlustrationLayout>
  );
}
