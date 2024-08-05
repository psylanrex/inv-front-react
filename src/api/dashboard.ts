import { DashboardState } from "@/layouts/dashboard/Dashboard";
import API from "../utils/request";
import { DataReturnRate } from "@/layouts/dashboard/ReturnedRate";
import { DataDamagedItems } from "@/layouts/dashboard/DamagedItems";
import { DataBadRating } from "@/layouts/dashboard/BadRating";
import { DataGoodRating } from "@/layouts/dashboard/GoodRating";

export const dashboardInfo = async (): Promise<DashboardState> => {
  const res = await API.get(`api/dashboard`);
  return res.data;
};

export const dashboardReturnedRate = async (): Promise<DataReturnRate> => {
  const res = await API.get(`api/dashboard/returned-rate`);
  return res.data;
};

export const dashboardDamagedItems = async (): Promise<DataDamagedItems> => {
  const res = await API.get(`api/dashboard/damaged-items`);
  return res.data;
};

export const dashboardBadRating = async (): Promise<DataBadRating> => {
  const res = await API.get(`api/dashboard/bad-rating`);
  return res.data;
};

export const dashboardGoodRating = async (): Promise<DataGoodRating> => {
  const res = await API.get(`api/dashboard/good-rating`);
  return res.data;
};
