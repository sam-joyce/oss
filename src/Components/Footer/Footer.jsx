import React, { Component } from 'react';
import styles from "./Footer.module.scss";
import ContactBanner from "../Utility/ContactBanner";

import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import rig from "../Static/Images/oss-rig.png";

class Footer extends Component {
  render() {
    return (
      <section className={styles.footer_container}>
        <ContactBanner />
        <section className={styles.footer}>
          <img src={rig} alt="Offshore Stainless Oil Rig" />
          <article>
            <p>© 2010-2020 Offshore Stainless Supplies Ltd. All Rights Reserved. (Registered Company No: 03888553)</p>
          </article>
          <div>
            <a href=""><FaTwitter /></a>
            <a href="https://www.linkedin.com/company/offshore-stainless-supplies-ltd/" target="__blank" ><FaLinkedinIn /></a>
          </div>
        </section>
      </section>
    )
  }
}

export default Footer;