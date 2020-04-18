import React, { Component } from 'react';
import { Link } from "@reach/router";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
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
            <Navbar collapseOnSelect expand="lg">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/home" route="/home">Home</Nav.Link>
                  <Nav.Link href="/about" route="/about">About</Nav.Link>
                  <Nav.Link href="/disclaimer" route="/disclaimer">Disclaimer</Nav.Link>
                  <Nav.Link href="/contact" route="/contact">
                    <Button variant="danger" className={styles.contact}>Contact Us</Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;