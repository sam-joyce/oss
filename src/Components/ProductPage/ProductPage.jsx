import React, { Component } from 'react';
import styles from "./ProductPage.module.scss";
import {
  Tabs,
  Tab
} from "react-bootstrap";
// import ResponsivePlayer from "./ResponsivePlayer/ResponsivePlayer";
import Aos from "aos";
import "aos/dist/aos.css";

// import { FaCheck } from 'react-icons/fa';
// import { FaClipboardList } from 'react-icons/fa';
// import { FaFile } from 'react-icons/fa';
// import { FaHandshake } from 'react-icons/fa';
// import ProductList from './ProductList/ProductList';

class ProductPage extends Component {
  render() {
    Aos.init();
    return (
      <>
        {/* <article className={styles.video}>
          <ResponsivePlayer />
        </article> */}
        <Tabs defaultActiveKey="bar" id="uncontrolled-tab-example">
          <Tab eventKey="sheet" title="Sheet" className={styles.card_container}>
            <section className={styles.container}>
              <article></article>
              <article></article>
              <article data-aos="fade-in"></article>
              <article data-aos="fade-in"></article>
            </section>
          </Tab>
          <Tab eventKey="bar" title="Bar" className={styles.card_container}>
            <section className={styles.container}>
              <article></article>
              <article></article>
              <article data-aos="fade-in"></article>
              <article data-aos="fade-in"></article>
            </section>
          </Tab>
        </Tabs>
      </>
    );
  }
}

export default ProductPage;