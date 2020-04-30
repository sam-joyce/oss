import React, { Component } from 'react';
import styles from "./Footer.module.scss";

class Footer extends Component {
  render() { 
    return (
      <article className={styles.footer}>
        <p>© 2010-2020 Offshore Stainless Supplies Ltd. All Rights Reserved. (Registered Company No: 03888553)</p>
      </article>
    );
  }
}
 
export default Footer;