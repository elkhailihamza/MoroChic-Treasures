import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_URL}/api`,
});

axiosClient.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "ACCESS_TOKEN"
    )}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
