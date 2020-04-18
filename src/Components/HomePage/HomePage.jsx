import React, { Component } from 'react';
import styles from "./HomePage.module.scss";

class HomePage extends Component {
  state = {}
  render() {
    return (

      <div className={styles.container}>
        <div className={styles.bar_box}>
          <div className={styles.color_overlay}></div>
          <h1>LOOKING FOR BAR</h1>
          <p>We stock, Cold Drawn bar in Round, Hexagonal, Rectangular and Square sections. These can be supplied in full lengths or cut to size if required.</p>
          <button>Bar</button>
        </div>
        <div className={styles.sheet_box}>
          <div className={styles.color_overlay}></div>
          <h1>LOOKING FOR SHEET</h1>
          <p>Type 1.4003 stainless steel is a utility ferritic stainless steel, often used in place of mild steel. It offers the benefits of more highly alloyed stainless steels such as strength, corrosion and abrasion resistance, durability and low maintenance.</p>
          <button>Sheet</button>
        </div>
      </div>
    );
  }
}

export default HomePage;