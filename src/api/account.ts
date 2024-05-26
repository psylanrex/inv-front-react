import { ProfileState } from "@/slices/profileSlice";
import API from "../utils/request";

export const accountProfile = async (): Promise<ProfileState> => {
  const res = await API.get(`api/account/profile`);
  return res.data;
};
