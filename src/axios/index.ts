import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,

  baseURL:
    process.env.NODE_ENV == "production"
      ? process.env.API_URL
      : process.env.DEV_URL,
});

export default axiosInstance;

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject({message: error.response.data.error, status: error.response.status})
);
