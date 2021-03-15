import React, { Component } from 'react';
import styles from "./HomePage.module.scss";
import { Link } from '@reach/router';

import bar from "../Static/Images/bar.png";
import sheet from "../Static/Images/sheet.png";
import sparks from '../Static/Images/sparks.png';


class HomePage extends Component {
  
  render() {
    return (
      <>
        <section className={styles.landing}>
          <img src={sparks} alt="A steel cutting tool in use" />
          <div className={styles.text_wrapper}>
            <h1>We are, <span>Offshore Stainless Supplies Ltd.</span></h1>
            <p>OSSL was formed in 1999, and is now a market leader in the supply of high tensile stainless steel to the a variety of industries. In **** OSSL introduced the stockholding and processing of 1.4003 to its capabilities, moving to our current premises in Brownhills, UK.</p>
          </div>
        </section>
        <section className={styles.second_section}>
          <div className={styles.second_section_1}>
            <h2>We supply a wide range of industries, including...</h2>
          </div>
          <div className={styles.second_section_2}>
            <div>
              <h2><span>01.</span> Oil & Gas...</h2>
              <p>We supply energy and oil and gas companies and their subcontractors with an extensive range of fully traceable certified material in the UK and across the world.  OSSL are renowned for manufacturing cold drawn bar to the energy and Oil and Gas industries to ASTM, NORSOK and NACE standards.</p>
            </div>
            <div>
              <h2><span>02.</span> Transport...</h2>
              <p>Supplying transport companies for over 20 years, OSSL is a key supplier to the UK largest road transport companies and subcontractors around the UK.</p>
            </div>
            <div>
              <h2><span>03.</span> Commercial...</h2>
              <p>OSSL manufacture and supply to many different industries including, Automotive, Construction and many more, OSSL are known worldwide for quality and service.</p>
            </div>
          </div>
        </section>
        <section className={styles.third_section}>
          <div>
            <hr />
            <h2>Featured Products<span>.</span></h2>
            <hr />
          </div>
          <h4>From cold drawn bar to stainless steel sheet OSSL have the vast knowledge and stock to supply all different industries worldwide.</h4>
          <div className={styles.products}>
            <article>
              <img src={bar} alt="steel bar"/>
              <h5>Steel Bar</h5>
              <p>We stock, Cold Drawn bar in Round, Hexagonal, Rectangular and Square sections. These can be supplied in full lengths or cut to size. OSSL specialise in the manufacture and supply of cold drawn, close tolerance sections in hexagonal, square, rectangular and round forms for the production of valves bodies, fittings and fasteners.</p>
            </article>
            <article>
              <img src={sheet} alt="steel sheet"/>
              <h5>Steel Sheet</h5>
              <p>OSSL are Europe’s Largest Stockholder of 1.4003 stainless steel,  from 1 mm to 30 mm OSSL will have you covered with a cut to length line that can cut up to 8 mm thick.</p>
            </article>
          </div>
        </section>
      </>
    );
  }
}

export default HomePage;