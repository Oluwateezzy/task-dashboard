import axios from "axios";

// Creating an Axios instance with predefined configurations
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
  // Sets the base URL from environment variables, defaults to localhost if not provided

  withCredentials: false
  // Disables sending credentials (cookies, authorization headers) with cross-origin requests
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;