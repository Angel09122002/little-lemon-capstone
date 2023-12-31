import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "../../styles/navbar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobilemenu = () => {
    setClick(false);
  };

  return (
    <nav className="navbar">
      <div className="Logo">
        <img
          src={logo}
          alt="Logo-navbar"
          style={{ width: "250px", height: "auto" }}
        />
        <div className="navbar-container"></div>
      </div>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <div className={click ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-ul">
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobilemenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <a to="/about" className="nav-links" onClick={closeMobilemenu}>
              About
            </a>
          </li>

          <li className="nav-item">
            <a to="/menu" className="nav-links" onClick={closeMobilemenu}>
              Menu
            </a>
          </li>

          <li className="nav-item">
            <Link
              to="/reservations"
              className="nav-links"
              onClick={closeMobilemenu}
            >
              Reservations
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
