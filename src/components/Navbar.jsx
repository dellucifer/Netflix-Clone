import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom"

function Navbar() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate()

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.addEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          onClick={() => navigate('/')}
          src="https://raw.githubusercontent.com/dellucifer/Netflix-Clone/main/public/pngegg.png"
          alt=""
        />
        <img
          className="nav__avatar"
          onClick={() => navigate('/profile')}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
