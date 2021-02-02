import axios, { AxiosRequestConfig } from "axios";
import store from "../store/index";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL:
    process.env.NODE_ENV == "production"
      ? process.env.VUE_APP_PROD_API_URL
      : process.env.VUE_APP_DEV_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers = { authorization: `Bearer ${store.getters.accessToken}` };
  return config;
});

// axiosRetry(axiosInstance, {retries: 1, r})

export default axiosInstance;

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest: AxiosRequestConfig = error.config;
    if (!originalRequest.data) {
      originalRequest.data = { _retry: false };
    } else {
      originalRequest.data = JSON.parse(originalRequest.data);
    }
    if (originalRequest.url != "/auth/token" && error.response.status === 401 && !originalRequest.data._retry) {
      originalRequest.data._retry = true;
      await store.dispatch("getToken");

      return axiosInstance.request(originalRequest);
    }
    return Promise.reject({
      message: error.response.data.error,
      status: error.response.status,
    });
  }
);
