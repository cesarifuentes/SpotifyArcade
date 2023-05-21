import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./testing.css";
import "./index.scss";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import ErrorPage from "./pages/ErrorPage";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Lobby from "./pages/Lobby";

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
      // {
      //   path: "/home/tutorial", // contacts/:contactId
      //   element: <Tutorial />,
      // },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home/create",
        element: <Create />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/home/create/lobby",
        element: <Lobby />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
