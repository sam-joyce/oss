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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quod a unde ducimus inventore ipsa culpa quos soluta amet voluptate. Sint blanditiis consequuntur quibusdam in possimus porro eos et mollitia!</p>
            </div>
            <div>
              <h2><span>02.</span> Transport...</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quod a unde ducimus inventore ipsa culpa quos soluta amet voluptate. Sint blanditiis consequuntur quibusdam in possimus porro eos et mollitia!</p>
            </div>
            <div>
              <h2><span>03.</span> Internet Providers...</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quod a unde ducimus inventore ipsa culpa quos soluta amet voluptate. Sint blanditiis consequuntur quibusdam in possimus porro eos et mollitia!</p>
            </div>
          </div>
        </section>
        <section className={styles.third_section}>
          <div>
            <hr />
            <h2>Featured Products<span>.</span></h2>
            <hr />
          </div>
          <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda deserunt velit quas, nam at harum dolorum. Quam impedit aliquam eveniet, modi, unde porro perspiciatis doloremque.</h4>
          <div className={styles.products}>
            <article>
              <img src={bar} alt="steel bar"/>
              <h5>Steel Bar</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia cum molestias ut est quisquam, rerum, eaque cumque laudantium aliquam velit nihil harum expedita culpa delen.</p>
            </article>
            <article>
              <img src={sheet} alt="steel sheet"/>
              <h5>Steel Sheet</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia cum molestias ut est quisquam, rerum, eaque cumque laudantium aliquam velit nihil harum expedita culpa delen.</p>
            </article>
          </div>
        </section>
        <section className={styles.contact_banner}>
          <h3>Want to get in touch?</h3>
          <Link to="/contact"><button>Contact Us</button></Link>
        </section>
      </>
    );
  }
}

export default HomePage;