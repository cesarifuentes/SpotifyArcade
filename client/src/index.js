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

// Get code from url (after logged in)
const code_url = new URLSearchParams(window.location.search).get("code");
if (code_url) {
  // If success then store & cut the code string from the URL
  localStorage.setItem("code", code_url);
  window.history.pushState({}, null, "/");
  // TODO: when left arrowed, the token stays in local storage
}

// TODO: really we just need to get accessToken as a global var

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={localStorage.getItem("code") ? <Home /> : <Login />}
      />
      {/* || localStorage.getItem("accessToken") */}
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
    // </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
