import axios from "axios";
//let BaseUrl = "https://localhost:5000/api";
export let baseURL;
export let imageUrl;
export let defaultUrl;

// if (window.location.hostname == "localhost") {
  // baseURL = "https://localhost:6058/api";
  // imageUrl = "https://localhost:6058/";
  // defaultUrl = "https://localhost:6058/";
// } else {
  baseURL = "https://zipitsolar.com:6058/api";
  imageUrl = "https://zipitsolar.com:6058/";
  defaultUrl = "https://zipitsolar.com:6058/";
// }
let api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
// api.interceptors.request.use(function (config) {
//   const token = localStorage.getItem("token");
//   console.log(`'tokentokentoken'.`, token);
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   console.log("config", config);
//   return config;
// });

export default api;
