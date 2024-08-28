import React from "react";
import logo from "./logo.png";
// import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
