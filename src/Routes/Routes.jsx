import React, { Component } from 'react';
import { Router } from "@reach/router";

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
          <HomePage path="/home" />
          <AboutPage path="/about" />
          <DisclaimerPage path="/disclaimer" />
          <ContactPage path="/contact" />
        </Router>
      </>
    );
  }
}

export default Routes;