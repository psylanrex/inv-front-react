import { Routes, Route } from "react-router-dom";

// import layout admin
import AuthCoverLayout from "@/components/layouts/AuthCoverLayout";
// import authentication
import {
  Confirm,
  Forgot,
  Logout,
  ChangePassword,
  Register,
  Login,
} from "@/views/authentication";

export default function AuthCover() {
  return (
    <AuthCoverLayout>
      <Routes>
        {/* authentication  */}
        <Route path="/login/*" element={<Login />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/logout/*" element={<Logout />} />
        <Route path="/forgot/*" element={<Forgot />} />
        <Route path="/confirm/*" element={<Confirm />} />
        <Route path="/change-password/*" element={<ChangePassword />} />
      </Routes>
    </AuthCoverLayout>
  );
}
