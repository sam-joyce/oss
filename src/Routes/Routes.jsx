import React, { Component } from 'react';
import { Router, Redirect } from "@reach/router";

import HomePage from '../Components/HomePage/HomePage';
import AboutPage from "../Components/AboutPage/AboutPage";
import DisclaimerPage from "../Components/DisclaimerPage/DisclaimerPage";
import ContactPage from "../Components/ContactPage/ContactPage";


class Routes extends Component {
  state = {}
  render() {
    return (
      <>
        <Router>
          <HomePage path="/" />
          <AboutPage path="/about" />
          <DisclaimerPage path="/disclaimer" />
          <ContactPage path="/contact" />
          {/* <Redirect from="" to="/home" /> */}
        </Router>
      </>
    );
  }
}

export default Routes;