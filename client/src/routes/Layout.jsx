import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "../Navbar";

const Layout = () => {
  return (
    <div>
      {/* TODO: add navbar <Navbar /> */}
      {/* TODO: move page class here */}
      <Outlet />
    </div>
  );
};

export default Layout;
