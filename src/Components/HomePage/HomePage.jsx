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
            <h1>Welcome to <span>Offshore Stainless Supplies Limited.</span></h1>
            <p>OSSL is a privately owned company formed in 1999 to supply high tensile stainless steel to the Offshore Industries. In **** OSSL introduced the stockholding and processing of 1.4003 to its capabilities, moving to our current premises in ****.</p>
            <p>Offshore is now the market leader in the supply of cold drawn, high performance stainless steels, super duplex and nickels alloys. Complemented by the largest independent stock of ferritic stainless steel in Europe.</p>
            <br />
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
              <h3>Connect on LinkedIn <a href="https://www.linkedin.com/company/offshore-stainless-supplies-ltd/" target="_blank" rel="noopener noreferrer"><span><AiOutlineLinkedin /></span></a></h3>
            </section>
            <section>
              <Link to='/technical'><h3>Our Accreditations <span><BsListCheck /></span></h3></Link>
            </section>
          </article>
        </section>
        <section>

        </section>
      </>
    );
  }
}

export default HomePage;