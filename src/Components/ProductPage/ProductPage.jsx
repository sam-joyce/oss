import React, { useState } from 'react';
import styles from "./ProductPage.module.scss";
import { Link } from '@reach/router';

import bar from "../Static/Images/bar.png";
import sheet from "../Static/Images/sheet.png";


import BarProduct from '../BarProduct';
import SheetProduct from '../SheetProduct';

const ProductPage = () => {
  const [pageToShow, setPageToShow] = useState(true);

  const isSheetShowing = pageToShow ? <SheetProduct /> : <BarProduct />;
  return (
    <>
      <section className={styles.intro}>
        <h1>Our products, <br /><span>all in one place.</span></h1>
      </section>
      <div className={styles.pictures}>
        <img src={sheet} alt="sheet steel" />
        <img src={bar} alt="bar steel" />
      </div>
      <section className={styles.button_container}>
        <button onClick={() => setPageToShow(true)}>Sheet</button>
        <button onClick={() => setPageToShow(false)}>Bar</button>
      </section>
      {/* <BarProduct /> */}
      {isSheetShowing}
      
      <section className={styles.contact_banner}>
        <h3>Want a quote?</h3>
        <Link to="/contact"><button>Contact Us</button></Link>
      </section>
    </>
  );
}

export default ProductPage;