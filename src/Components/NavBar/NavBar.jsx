import React, { Component } from 'react';

import { Link } from "@reach/router";
import { AiFillLinkedin } from 'react-icons/ai';
import { FaPhoneSquare } from 'react-icons/fa';

import styles from "./NavBar.module.scss";
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
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/news">News</Link>
              <Link to="/products">Products</Link>
              <Link to="/processing">Processing</Link>
              <Link to="/technical">Technical</Link>
              <Link to="/contact">Contact</Link>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;