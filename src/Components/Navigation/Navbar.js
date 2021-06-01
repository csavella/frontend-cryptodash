import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="navheader">CryptoDash</h1>
        <div className="links">
          <div className="menu">
            <div className="menu-line" id="line1"></div>
            <div className="menu-line" id="line2"></div>
            <div className="menu-line" id="line3"></div>
          </div>
        </div>
      </nav>
      <div className="offset_top"></div>
    </div>
  );
};

export default Navbar;
