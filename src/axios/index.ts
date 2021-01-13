import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,

  baseURL:
    process.env.NODE_ENV == "Production"
      ? "https://www.trails.maxwsmoot.com/api"
      : "http://localhost:3000/api",
});

export default axiosInstance;

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject({message: error.response.data.error, status: error.response.status})
);
