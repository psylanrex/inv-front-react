import { DashboardState } from "@/layouts/dashboard/Dashboard";
import API from "../utils/request";

export const dashboardInfo = async (): Promise<DashboardState> => {
  const res = await API.get(`api/dashboard`);
  return res.data;
};
