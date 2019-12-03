import axios from "axios";

export const HTTP = axios.create({
  baseURL: "http://localhost:3000/api/v1"
});

HTTP.interceptors.request.use(
  config => {
    config.headers["x-access-token"] = localStorage.getItem("token");
    return config;
  },
  error => Promise.reject(error)
);
