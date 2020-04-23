import React, { Component } from 'react';
import styles from "./HomePage.module.scss";
import rig from "../Static/Images/oss-rig.png";

import Button from "../Utility/Button/Button";

class HomePage extends Component {
  state = {}
  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.bar_box}>
            <div className={styles.color_overlay1}></div>
            <h1>LOOKING FOR <br/>BAR</h1>
            <p>We stock, Cold Drawn bar in Round, Hexagonal, Rectangular and Square sections. These can be supplied in full lengths or cut to size if required.</p>
            {/* <button>Bar</button> */}
            <Button text={`Bar`}/>
          </div>
          <div className={styles.sheet_box}>
            <div className={styles.color_overlay2}></div>
            <h1>LOOKING FOR <br/>SHEET</h1>
            <p>Type 1.4003 stainless steel is a utility ferritic stainless steel, often used in place of mild steel. It offers the benefits of more highly alloyed stainless steels such as strength, corrosion and abrasion resistance, durability and low maintenance.</p>
            {/* <button>Sheet</button> */}
            <Button handleClick={console.log("clicked")} text={`Sheet`}/>
          </div>
        </div>
        <div className={styles.intro}>
          <section className={styles.content}>
            <img src={rig} alt="oil rig from company logo"/>
            <h4>Welcome to Offshore Stainless Supplies Ltd</h4>
            <p>We have are a UK based company. We have been supporting our customers across the globe for over 20 years with their stainless steel and nickel alloy requirements.</p>
            <button>About us</button>
          </section>
        </div>
      </>
    );
  }
}

export default HomePage;