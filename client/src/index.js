import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import ErrorPage from "./pages/ErrorPage";
import Start from "./pages/Start";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Login /> },
      {
        path: "/tutorial", // contacts/:contactId
        element: <Tutorial />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home/start",
        element: <Start />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
