import React, { Component } from 'react';
import { Router, globalHistory, Redirect } from "@reach/router";

import HomePage from '../Components/HomePage/HomePage';
import AboutPage from "../Components/AboutPage/AboutPage";
import DisclaimerPage from "../Components/DisclaimerPage/DisclaimerPage";
import ContactPage from "../Components/ContactPage/ContactPage";
import ProductPage from "../Components/ProductPage/ProductPage";


class Routes extends Component {
  state = {}


  barProductsPage = () => {
    globalHistory.navigate('/products')
  };
  
  sheetProductsPage = () => {
    globalHistory.navigate('/products/sheet')
  };
  
  render() {
    return (
      <>
        <Router>
          <HomePage 
            path="/" 
            barProductsPage={this.barProductsPage} 
            sheetProductsPage={this.sheetProductsPage}
          />
          <AboutPage path="/about" />
          <DisclaimerPage path="/disclaimer" />
          <ContactPage path="/contact" />
          <ProductPage path="/products" />
          {/* <Redirect from="" to="/home" /> */}
        </Router>
      </>
    );
  }
}

export default Routes;