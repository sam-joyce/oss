import React, { Component } from 'react';
import styles from "./HomePage.module.scss";
import { Link } from "@reach/router";
import SlideShow from "./SlideShow/SlideShow";

import { FaRegPlayCircle } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsListCheck } from 'react-icons/bs';


class HomePage extends Component {
  state = {}
  render() {
    return (
      <>
        <SlideShow />
        <section className={styles.welcome}>
          <div className={styles.innerText}>
            <h1>Welcome to <span>Offshore Stainless.</span></h1>
            <p>We have are a UK based company. We have been supporting our customers across the globe for over 20 years with their stainless steel and nickel alloy requirements.</p>
            <p>We understand the importance of your time, so our sales team are on hand and ready to give quotes on the same day you request them. We are not only a stockholder. Our 'all-in-one' operation allows us to be quicker than anyone else in cutting, grinding and finishing any order that you place with us. Our own fleet of delivery lorries then ensure there are no delays with your order leaving our factory once it is ready, meaning it can be at your front door that same day.</p>
            <br/>
            <h5>ISO 9001:2015 Quality Accredited</h5>
            <p>We are fully ISO 9001: 2015 accredited, demonstrating that we have a Quality Management System that is reviewed annually and audited externally every 3 years. This ensures we can consistently provide products and services that meet customer and applicable statutory and regulatory requirements. This accreditation provides assurance on our promise that you will always receive your ordered material on time!</p>
          </div>
        </section>
        <section className={styles.hp_container}>
          <article className={styles.hp_buttons}>
            <section>
              <h3>Company Video <span><FaRegPlayCircle /></span></h3>
            </section>
            <section>
              <h3>Connect on LinkedIn <span><AiOutlineLinkedin /></span></h3>
            </section>
            <section>
              <h3>Our Accreditations <span><BsListCheck /></span></h3>
            </section>
          </article>
        </section>
      </>
    );
  }
}

export default HomePage;