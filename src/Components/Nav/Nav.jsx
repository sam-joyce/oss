import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import './Nav.scss';

import logo from "../Static/Images/oss-logo.png";


class Nav extends Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  handleRoute = () => {
    this.setState({ clicked: false });
  }


  render() {
    return (
      <nav className="nav_items">
        <img className="navbar_logo" src={logo} alt="Offshore Stainless Logo" />
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

          <NavLink to="/" exact style={{ textDecoration: 'none' }}>
            <li className="nav-links" onClick={this.handleRoute}>Home</li>
          </NavLink>
          <NavLink to="/about" style={{ textDecoration: 'none' }}>
            <li className="nav-links" onClick={this.handleRoute}>About</li>
          </NavLink>
          <NavLink to="/post" style={{ textDecoration: 'none' }}>
            <li className="nav-links" onClick={this.handleRoute}>News</li>
          </NavLink>
          <NavLink to="/products" style={{ textDecoration: 'none' }}>
            <li className="nav-links" onClick={this.handleRoute}>Products</li>
          </NavLink>
          <NavLink to="/processing" style={{ textDecoration: 'none' }}>
            <li className="nav-links" onClick={this.handleRoute}>Processes</li>
          </NavLink>
          <NavLink to="/contact" style={{ textDecoration: 'none' }}>
            <li className="nav-links" onClick={this.handleRoute}>Contact</li>
          </NavLink>
        </ul>
      </nav>
    );
  }
}

export default Nav;
