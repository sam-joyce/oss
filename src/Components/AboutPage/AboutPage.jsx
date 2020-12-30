import React, { Component } from 'react';
import styles from "./AboutPage.module.scss";
import infos from "../../data/about_data";
import AboutItem from "../AboutItem";

import chris from '../Static/Images/4926.jpg';
import keith from '../Static/Images/4734.jpg';
import paul from '../Static/Images/5134.jpg';

class AboutPage extends Component {
  state = {}
  render() {
    return (
      <section className={styles.about_container}>
        <div className={styles.about_intro}>
          <p>WE ARE HERE TO HELP</p>
          <h2>Our talented team operates to the highest standards to produce high quality products and amazing buying experiences for our customers.</h2>
        </div>
        <div className={styles.about_images}>
          <div>
            <img src={chris} alt="number one" />
            <h3>Chris Joyce</h3>
            <p>Managing Director, Founder</p>
          </div>
          <div>
            <img src={keith} alt="number two" />
            <h3>Keith Maskell</h3>
            <p>Commercial Director</p>
          </div>
          <div>
            <img src={paul} alt="number three" />
            <h3>Paul Kingston</h3>
            <p>Finance Director</p>
          </div>
        </div>
        <div className={styles.about_header}>
          <h2>An offshore experience...</h2>
          <p>We are a professional, transparent team with over 20 years experience serving many industries such as oil and gas, communications and government.</p>
        </div>
        <article className={styles.about_items}>
          {infos.map((info, index) => <AboutItem info={info} key={index} />)}
        </article>
      </section>
    );
  }
}

export default AboutPage;