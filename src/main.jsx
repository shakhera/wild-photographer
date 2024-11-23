import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/routers.jsx";
import { PhotoProvider } from "react-photo-view";
import AuthProvider from "./provider/AuthProvider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./provider/ThemeProvider/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <HelmetProvider>
          <PhotoProvider>
            <RouterProvider router={router}></RouterProvider>
          </PhotoProvider>
        </HelmetProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
