import React, { Component } from 'react';
import styles from "./HomePage.module.scss";

import { FaAngleDoubleRight } from 'react-icons/fa';

class HomePage extends Component {
  state = {}
  render() {
    return (
      <>
        <section className={styles.welcome}>
          <div className={styles.innerText}>
            <h1>Welcome to <span>Offshore Stainless.</span></h1>
            <p>We have are a UK based company. We have been supporting our customers across the globe for over 20 years with their stainless steel and nickel alloy requirements.</p>
          </div>
        </section>
        <section className={styles.container}>
          <article className={styles.bar_box}>
            <div>
              <h4>Looking for <br /> <span>BAR</span></h4>
              <hr/>
              <p>We stock, Cold Drawn bar in Round, Hexagonal, Rectangular and Square sections. These can be supplied in full lengths or cut to size if required.</p>
              <hr/>
              <a href="*">
                <FaAngleDoubleRight className={styles.button} />
              </a>
            </div>
          </article>
          <article className={styles.sheet_box}>
            <div>
              <h4>Looking for <br /> <span>SHEET</span></h4>
              <hr/>
              <p>Type 1.4003 stainless steel is a utility ferritic stainless steel, often used in place of mild steel. It offers the benefits of more highly alloyed stainless steels such as strength, corrosion and abrasion resistance, durability and low maintenance.</p>
              <hr/>
              <a href="*">
                <FaAngleDoubleRight className={styles.button} />
              </a>
            </div>
          </article>
        </section>


        {/* <div className={styles.container}>
          <div className={styles.intro}>
            <section className={styles.content}>
              <img src={rig} alt="oil rig from company logo" />
              <h4>Welcome to Offshore Stainless Supplies Ltd</h4>
              <p>We have are a UK based company. We have been supporting our customers across the globe for over 20 years with their stainless steel and nickel alloy requirements.</p>
              <button>About us</button>
            </section>
          </div>
          <div className={styles.bar_box}>
            <div className={styles.color_overlay1}></div>
            <h1>LOOKING FOR <br />BAR</h1>
            <p>We stock, Cold Drawn bar in Round, Hexagonal, Rectangular and Square sections. These can be supplied in full lengths or cut to size if required.</p>
           
            <Button text={`Bar`} />
          </div>
          <div className={styles.sheet_box}>
            <div className={styles.color_overlay2}></div>
            <h1>LOOKING FOR <br />SHEET</h1>
            <p>Type 1.4003 stainless steel is a utility ferritic stainless steel, often used in place of mild steel. It offers the benefits of more highly alloyed stainless steels such as strength, corrosion and abrasion resistance, durability and low maintenance.</p>
           
            <Button handleClick={console.log("clicked")} text={`Sheet`} />
          </div>
        </div> */}
      </>
    );
  }
}

export default HomePage;