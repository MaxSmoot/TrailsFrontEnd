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
  config.headers = { authorization: `Bearer ${store.getters.accessToken}` };
  return config;
});

// axiosRetry(axiosInstance, {retries: 1, r})

export default axiosInstance;

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      originalRequest.url != "/auth/token" &&
      error.response.status === 401 &&
      !JSON.parse(originalRequest.data)._retry
    ) {
      await store.dispatch("getToken");
      originalRequest.data = JSON.parse(originalRequest.data);
      originalRequest.data._retry = true;
      return axiosInstance.request(originalRequest);
    }
    return Promise.reject({
      message: error.response.data.error,
      status: error.response.status,
    });
  }
);
