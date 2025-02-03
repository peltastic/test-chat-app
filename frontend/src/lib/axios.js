import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://test-chat-app-yqfw.onrender.com/api",
  withCredentials: true,
});
