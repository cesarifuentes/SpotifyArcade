import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./testing.css";
import "./index.scss";
import Layout from "./layouts/Layout";
import Login from "./routes/Login";
import Home from "./routes/Home";
// import Tutorial from "./routes/Tutorial";
// import ErrorPage from "./routes/ErrorPage";
import Create from "./routes/Create";
import Join from "./routes/Join";
import Profile from "./routes/Profile";
import Lobby from "./routes/Lobby";
import MusicMatch from "./routes/MusicMatch";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Login />} />
      <Route path="home/">
        <Route index element={<Home />} />
        <Route path="profile/" element={<Profile />} />
        <Route path="create/">
          <Route index element={<Create />} />
          <Route path="lobby/">
            <Route index element={<Lobby />} />
            <Route path="musicmatch/" element={<MusicMatch />} />
          </Route>
        </Route>
        <Route path="join/">
          <Route index element={<Join />} />
          <Route path="lobby/" element={<Lobby />} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
