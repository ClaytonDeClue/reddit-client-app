import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src="reddit-logo-removebg-preview.png"
          alt="Reddit App Logo"
          className="header-logo"
        />
        <h1 className="header-title">
          Reddit<span className="reddit-color">Lite</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
