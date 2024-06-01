import API from "../utils/request";

type AuthImpersonateRequest = {
  user_name: string;
  password: string;
  vendor_id?: string;
};

type AuthImpersonateResponse = {
  token: string;
  message: string;
};

export const authImpersonate = async (
  data: AuthImpersonateRequest
): Promise<AuthImpersonateResponse> => {
  const res = await API.post(`api/impersonate`, data);
  return res.data;
};

export const authRegister = async () => {
  const res = await API.post(`api/register`);
  return res.data;
};

export const authLogin = async () => {
  const res = await API.post(`api/login`);
  return res.data;
};

export const authLoginCheck = async () => {
  const res = await API.get(`api/login-check`);
  return res.data;
};

export const authLogout = async () => {
  const res = await API.post(`api/logout`);
  return res.data;
};

export const authPermissionDenied = async () => {
  const res = await API.get(`api/permission-denied`);
  return res.data;
};

export const authImpersonateVendor = async (id: string) => {
  const res = await API.post(`api/impersonateVendor/${id}`);
  return res.data;
};
