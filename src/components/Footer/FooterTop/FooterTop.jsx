import React from "react";
import Map from "../../Map/Map";
import "./FooterTop.scss";
import LogoLinkFooter from "../../LogoLinkFooter";
import { NavLink } from "react-router-dom";
import youtube from "../../../assets/social_icons/Youtube.svg";
import instagram from "../../../assets/social_icons/Instagram.svg";
import facebook from "../../../assets/social_icons/Facebook.svg";
import twitter from "../../../assets/social_icons/Twitter.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterTop = (props) => {
  return (
    <div className="footer-top">
      <div className="footer-top__box">
        <LogoLinkFooter />
        <p className="footer-top__subtitle">Quick Links</p>
        <NavLink className="footer-top__link" to="/contact_us">
          Contact Us
        </NavLink>
        <NavLink className="footer-top__link" to="/about">
          About
        </NavLink>
      </div>
      <div className="footer-top__box">
        <p className="footer-top__subtitle footer-top__second-subtitle">
          Others
        </p>
        <NavLink className="footer-top__link" to="/">
          User FAQs
        </NavLink>
        <NavLink className="footer-top__link" to="/contact_us">
          Contact Us
        </NavLink>
        <NavLink className="footer-top__link" to="/">
          Legal
        </NavLink>
        <NavLink className="footer-top__link" to="/">
          Privacy Policy
        </NavLink>
        <NavLink className="footer-top__link" to="/">
          Terms and conditions
        </NavLink>
      </div>
      <div className="footer-top__box">
        <div className="footer-top__txt-box">
          <FontAwesomeIcon icon="map-marker-alt" />
          <p className="footer-top__txt">Infomation technologies building, Victoria Island, Lagos, Nigeria.</p>
        </div>
        <div className="footer-top__txt-box">
          <FontAwesomeIcon icon="phone-alt" />
          <p className="footer-top__txt">+234 081-1236-4568</p>
        </div>
        <div className="footer-top__txt-box">
          <FontAwesomeIcon icon="envelope" />
          <p className="footer-top__txt">hello@example.com</p>
        </div>
        <div className="footer-top__social">
          <NavLink className={"footer-top__social-link"} to="/">
            <img src={youtube} alt="social-link-img" />
          </NavLink>
          <NavLink className={"footer-top__social-link"} to="/">
            <img src={instagram} alt="social-link-img" />
          </NavLink>
          <NavLink className={"footer-top__social-link"} to="/">
            <img src={facebook} alt="social-link-img" />
          </NavLink>
          <NavLink className={"footer-top__social-link"} to="/">
            <img src={twitter} alt="social-link-img" />
          </NavLink>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default FooterTop;
