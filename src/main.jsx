import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./App";
import { ThemeProvider } from "./ThemeContext.jsx"; 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
