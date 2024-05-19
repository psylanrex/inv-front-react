import axios from "axios";
import { getAccessToken } from "./utils";

const defaultOptions = {
  baseURL: import.meta.env.VITE_INVITORY_API,
};

// create instance
const instance = axios.create(defaultOptions);

instance.interceptors.request.use(async (config) => {
  let { token } = getAccessToken();

  config.headers.Authorization = token ? `Bearer ${token}` : "";

  return config;
});

export default instance;
