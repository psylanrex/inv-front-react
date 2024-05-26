import { Routes, Route } from "react-router-dom";

// import auth layout
import AuthLayout from "@/components/layouts/AuthLayout";
// import authentication
import {
  Login,
  Register,
  Confirm,
  Forgot,
  Logout,
  ChangePassword,
} from "@/views/authentication";

export default function Auth() {
  return (
    <AuthLayout>
      <Routes>
        {/* authentication  */}
        <Route path="/login/*" element={<Login />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/logout/*" element={<Logout />} />
        <Route path="/forgot/*" element={<Forgot />} />
        <Route path="/confirm/*" element={<Confirm />} />
        <Route path="/change-password/*" element={<ChangePassword />} />
      </Routes>
    </AuthLayout>
  );
}
