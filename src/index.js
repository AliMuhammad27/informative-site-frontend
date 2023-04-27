import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ReactWOW from "react-wow";
import App from "./App";
import { toast, ToastContainer } from "react-toastify";
import HttpsRedirect from "react-https-redirect";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import store from "./store";

export const queryClient = new QueryClient({defaultOptions:{queries:{staleTime:1000*60*10}}});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HttpsRedirect>
    <Provider store={store}>

    <QueryClientProvider client={queryClient}>

      <ToastContainer />
      <App />
      </QueryClientProvider>
      </Provider>,

    </HttpsRedirect>
  </React.StrictMode>
);
