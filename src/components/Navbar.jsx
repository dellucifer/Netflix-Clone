import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav nav__black">
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024"
          alt=""
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
