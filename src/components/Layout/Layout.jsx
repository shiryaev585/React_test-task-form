import React from "react";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import About from "./About/About";
import ContactUs from "./ContactUs/ContactUs";
import Home from "./Home/Home";
import "./Layout.scss";

const Layout = (props) => {
  return (
    <div className="app-wrapper-content">
      <Header />
      <Route exact path="/home" render={() => <Home />} />
      <Route path="/about" render={() => <About />} />
      <Route path="/contact_us" render={() => <ContactUs />} />
    </div>
  );
};

export default Layout;
