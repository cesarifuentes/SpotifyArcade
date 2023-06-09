import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "../Navbar";

const Layout = () => {
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    // alert("closing");
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <div className="screen">
      <Outlet />
    </div>
    // {/* TODO: add navbar <Navbar /> */}
    // {/* TODO: move page class here */}
  );
};

export default Layout;
