import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="logo.png" alt="logo"/>
        <h2 className="left-heading">DAO KING</h2>
      </div>
      <div className="navbar-right">
        <p className="right-1">WEBSITE</p>
        <p className="right-2">CONNECT</p>
      </div>
    </div>
  );
};

export default Navbar;
