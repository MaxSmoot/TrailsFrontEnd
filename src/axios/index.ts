import axios from "axios";
import store from "../store/index";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL:
    process.env.NODE_ENV == "production"
      ? process.env.VUE_APP_PROD_API_URL
      : process.env.VUE_APP_DEV_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers = { "authorization": `Bearer ${store.getters.accessToken}`};
  return config;
});

export default axiosInstance;

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject({
      message: error.response.data.error,
      status: error.response.status,
    })
);
