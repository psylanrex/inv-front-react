import API from "../utils/request";

type AuthLoginData = {
  user_name: string;
  password: string;
  vendor_id?: string;
};

export const authImpersonate = (data: AuthLoginData) => {
  return API.post(`api/impersonate`, data);
};
