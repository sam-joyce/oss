import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

import AboutPage from "../AboutPage";
import News from "../News";
import ProductPage from "../ProductPage";
import ContactPage from "../ContactPage";

import logo from "../Static/Images/oss-logo.png";


class NavBar extends Component {
  state = {}
  render() {
    return (
      <>
        <div className={styles.nav_container}>
          <div className={styles.section_one}>
            <img src={logo} alt="Offshore Stainless Logo" />
          </div>
          <div className={styles.section_two}>
              <div className={styles.links}>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/post">News</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/processing">Processing</NavLink>
              </div>
              <div className={styles.contact}>
                <NavLink to="/contact">Contact</NavLink>
              </div>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;