import React, { Component } from 'react';
import styles from "./ContactBanner.module.scss";

import { MdEmail } from 'react-icons/md';
import { FaPhoneSquareAlt } from 'react-icons/fa';

class ContactBanner extends Component {
  state = {  }
  render() { 
    return (
      <section className={styles.contact_banner}>
        <article>
          <MdEmail />
          <a href="mailto:chris@offshorestainless.co.uk"><p>chris@offshorestainless.co.uk</p></a>
        </article>
        <article>
          <FaPhoneSquareAlt />
          <p>+44 (0)1922 414003 </p>
        </article>
      </section>
    );
  }
}
 
export default ContactBanner;