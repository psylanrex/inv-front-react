import axios from "axios";
import { getAccessToken, removeAccessToken } from "./utils";

const defaultOptions = {
  baseURL: import.meta.env.VITE_INVITORY_API,
};

// create instance
const instance = axios.create(defaultOptions);
instance.interceptors.response.use(
  async (config) => {
    return config;
  },
  (error) => {
    if (error.response?.status === 401) removeAccessToken();

    return Promise.reject(error);
  }
);

instance.interceptors.request.use(
  async (config) => {
    const { token } = getAccessToken();
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
