import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import HomePage from '../Components/HomePage/HomePage';
import AboutPage from "../Components/AboutPage/AboutPage";
import ContactPage from "../Components/ContactPage/ContactPage";
import ProductPage from "../Components/ProductPage/ProductPage";
import News from '../Components/News';
import NewsArticle from "../Components/NewsArticle";
import Nav from '../Components/Nav';
import ProcessingPage from '../Components/ProcessingPage';


class Routes extends Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route component={HomePage} path='/' exact />
            <Route component={AboutPage} path='/about' />
            <Route component={NewsArticle} path='/post/:slug' />
            <Route component={News} path='/post' />
            <Route component={ContactPage} path='/contact' />
            <Route component={ProductPage} path='/products' />
            <Route component={ProcessingPage} path='/processing' />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Routes;