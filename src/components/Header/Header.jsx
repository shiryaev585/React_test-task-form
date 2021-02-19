import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import LogoLink from '../LogoLink';

const Header = () => {
  return (
    <header className="header">
      <LogoLink />
      <ul className="header__navbar">
        <li>
          <NavLink className="header__navbar-item" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="header__navbar-item" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="header__navbar-item" to="/contact_us">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
