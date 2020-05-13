import React, { Component } from 'react';
import styles from "./ProductPage.module.scss";
import {
  Tabs,
  Tab
} from "react-bootstrap";
// import ResponsivePlayer from "./ResponsivePlayer/ResponsivePlayer";
import Aos from "aos";
import "aos/dist/aos.css";
import coils from "../Static/Images/coils.jpg";

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
        <section className={styles.header}>
          <h1>Stock</h1>
          <p>We have over £8,000,000 of stock across both Bar and Sheet to ensure we can meet every one of your requirments. <br /> Please see below for a breakdown of this stock.</p>
          <hr />
        </section>
        <Tabs defaultActiveKey="bar" id="uncontrolled-tab-example">
          <Tab eventKey="sheet" title="Sheet" className={styles.card_container}>
            <section className={styles.container}>
              <article className={styles.stock} data-aos="fade-in">
                <img src={coils} alt="" />
                <div className={styles.wording}>
                  <h3>Ferritic stainless steel sheet 1.4003</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil officiis repellat, accusantium provident placeat ut, doloribus nostrum doloremque animi cum assumenda accusamus illum facere. Vel rerum accusamus voluptatem soluta.</p>
                </div>
              </article>
              <article className={styles.stock} data-aos="fade-in">
                <div className={styles.wording}>
                  <h3>Ferritic stainless steel welded box section</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil officiis repellat, accusantium provident placeat ut, doloribus nostrum doloremque animi cum assumenda accusamus illum facere. Vel rerum accusamus voluptatem soluta.</p>
                </div>
                <img src={coils} alt="" />
              </article>
              <article className={styles.stock} data-aos="fade-in">
                <img src={coils} alt="" />
                <div className={styles.wording}>
                  <h3>Martensitic stainless steel sheet 1.4021</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil officiis repellat, accusantium provident placeat ut, doloribus nostrum doloremque animi cum assumenda accusamus illum facere. Vel rerum accusamus voluptatem soluta.</p>
                </div>
              </article>
              <article className={styles.stock} data-aos="fade-in">
                <div className={styles.wording}>
                  <h3>Austenitic stainless steel sheet in grades 304L, 316L and others</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil officiis repellat, accusantium provident placeat ut, doloribus nostrum doloremque animi cum assumenda accusamus illum facere. Vel rerum accusamus voluptatem soluta.</p>
                </div>
                <img src={coils} alt="" />
              </article>
            </section>
          </Tab>
          <Tab eventKey="bar" title="Bar" className={styles.card_container}>
            <section className={styles.container}>
              <article className={styles.stock} data-aos="fade-in">
                <h3>High tensile round and hexagonal cold drawn stainless steel bars</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil officiis repellat, accusantium provident placeat ut, doloribus nostrum doloremque animi cum assumenda accusamus illum facere. Vel rerum accusamus voluptatem soluta.</p>
              </article>
              <article className={styles.stock} data-aos="fade-in">
                <h3>Cold drawn/linished flat and square stainless steel bars</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil officiis repellat, accusantium provident placeat ut, doloribus nostrum doloremque animi cum assumenda accusamus illum facere. Vel rerum accusamus voluptatem soluta.</p>
              </article>
              <article className={styles.stock} data-aos="fade-in">
                <h3>Commercial grades of stainless steel bars</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil officiis repellat, accusantium provident placeat ut, doloribus nostrum doloremque animi cum assumenda accusamus illum facere. Vel rerum accusamus voluptatem soluta.</p>
              </article>
              <article className={styles.stock} data-aos="fade-in">
                <h3>Speciality high nickel grades of stainless steel bars</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil officiis repellat, accusantium provident placeat ut, doloribus nostrum doloremque animi cum assumenda accusamus illum facere. Vel rerum accusamus voluptatem soluta.</p>
              </article>
            </section>
          </Tab>
        </Tabs>
      </>
    );
  }
}

export default ProductPage;