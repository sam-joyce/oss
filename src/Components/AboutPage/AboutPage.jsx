import React, { Component } from 'react';
import styles from "./AboutPage.module.scss";
import AboutItem from '../AboutItem';
import staff from "../../data/staff";

import rig from "../Static/Images/oil-rig.png";

class AboutPage extends Component {
  state = {}
  render() {
    return (
      <>
        <section className={styles.about_landing}>
          <img src={rig} alt="An oil rig" />
          <div className={styles.text_wrapper}>
            <h1>About <span>Offshore Stainless Supplies</span></h1>
            <p>Offshore is now the market leader in the supply of cold drawn, high performance stainless steels, super duplex and nickels alloys. Complemented by the largest independent stock of ferritic stainless steel in Europe.</p>
          </div>
        </section>
        <section className={styles.mission}>
          <h2>"To attract and attain customers with high-valued products and services and the most satisfying buying experience in the UK."</h2>
          <p>Offshore Stainless Supplies Ltd is a privately owned stainless steel stockholder and cold drawer, processing much of our own stocks and specialist items within our facility at Walsall in the West Midlands. <br/> <br/> OSSL have been supplying and supporting major industries with the stainless steel and nickel alloy requirements for over a decade from our 80,000sq ft manufacturing and stockholding facility. OSSL serve many different markets including offshore oil and gas, marine, transport, automotive and construction both within the UK and worldwide.</p>
        </section>
        <section className={styles.people}>
          <div>
            <h2>This is us, <span>the people that make Offshore.</span></h2>
            <p>OSSL have an experienced commercial team with over 100 years of steel knowledge between them, a privately owned company willing to go that extra mile for all customers.</p>
          </div>
          <div className={styles.bios}>
            {staff.map((s, index) => <AboutItem member={s} key={index} />)}
          </div>
        </section>
      </>
    );
  }
}

export default AboutPage;