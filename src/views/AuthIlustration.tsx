import { Routes, Route } from "react-router-dom";

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

export default function AuthIlustration() {
  return (
    <AuthIlustrationLayout>
      <Routes>
        {/* authentication  */}
        <Route path="/login/*" element={<Login />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/logout/*" element={<Logout />} />
        <Route path="/forgot/*" element={<Forgot />} />
        <Route path="/confirm/*" element={<Confirm />} />
        <Route path="/change-password/*" element={<ChangePassword />} />
      </Routes>
    </AuthIlustrationLayout>
  );
}
