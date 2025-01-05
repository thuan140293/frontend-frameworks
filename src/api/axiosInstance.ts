import axios from "axios";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const uid = localStorage.getItem("uid");
    if (uid) {
      config.headers.Authorization = `Bearer ${uid}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor for error handling or token refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      // Handle token expiration or unauthorized access
      // Optional: Perform token refresh logic
      console.error("Unauthorized - Please log in again.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
