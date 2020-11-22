import React, { Component } from 'react';
import { Router, globalHistory, Redirect } from "@reach/router";

import HomePage from '../Components/HomePage/HomePage';
import AboutPage from "../Components/AboutPage/AboutPage";
import DisclaimerPage from "../Components/DisclaimerPage/DisclaimerPage";
import ContactPage from "../Components/ContactPage/ContactPage";
import ProductPage from "../Components/ProductPage/ProductPage";
import Accreditations from '../Components/Accreditations/Accreditations';
import TechnicalPage from '../Components/TechnicalPage/TechnicalPage';
import ProcessingPage from '../Components/ProcessingPage/ProcessingPage';
import AlloyPage from '../Components/AlloyPage/AlloyPage';
import News from '../Components/HomePage/News';


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
          <AlloyPage path="/alloys" />
          <DisclaimerPage path="/disclaimer" />
          <ContactPage path="/contact" />
          <ProductPage path="/products" />
          <ProcessingPage path="/processing" />
          <News path="news" />
          {/* <Accreditations path="/accreditations" /> */}
          <TechnicalPage path="/technical" />
          {/* <Redirect from="" to="/home" /> */}
        </Router>
      </>
    );
  }
}

export default Routes;