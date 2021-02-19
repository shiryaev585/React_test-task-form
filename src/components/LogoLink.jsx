import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';

const Footer = (props) => {
  return (
    <div className="logo-wrapper">
      <NavLink className={"logo-link"} to="/home">
        <img src={logo} alt="logo-img" />
      </NavLink>
    </div>
  );
};

export default Footer;
