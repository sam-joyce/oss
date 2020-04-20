import React, { Component } from 'react';
import { Link } from "@reach/router";
import {
  Navbar,
  Nav
} from "react-bootstrap";
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
                  <Nav.Link><Link to="/">Home</Link></Nav.Link>
                  <Nav.Link><Link to="/about">About</Link></Nav.Link>
                  <Nav.Link><Link to="/disclaimer">Disclaimer</Link></Nav.Link>
                  <Nav.Link to="/contact" route="/contact">
                    <Button variant="danger" className={styles.contact}><Link to="/contact">Contact</Link></Button>
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