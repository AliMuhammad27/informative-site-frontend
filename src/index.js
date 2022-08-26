import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ReactWOW from "react-wow";
import App from "./App";
import { toast, ToastContainer } from "react-toastify";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>
);
