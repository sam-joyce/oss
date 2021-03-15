import React, { Component } from 'react';
import styles from "./ContactBanner.module.scss";
import { BrowserRouter, Link } from "react-router-dom"

class ContactBanner extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <section className={styles.contact_banner}>
          <h3>Want a quote?</h3>
          <Link to="/contact"><button>Get in touch!</button></Link>
        </section>
      </BrowserRouter>
    );
  }
}

export default ContactBanner;