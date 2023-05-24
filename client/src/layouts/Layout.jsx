import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "../Navbar";

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
    // {/* TODO: add navbar <Navbar /> */}
    // {/* TODO: move page class here */}
  );
};

export default Layout;
