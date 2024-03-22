import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/routers.jsx";
import { PhotoProvider } from "react-photo-view";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PhotoProvider>
      <RouterProvider router={router}></RouterProvider>
    </PhotoProvider>
  </React.StrictMode>
);
