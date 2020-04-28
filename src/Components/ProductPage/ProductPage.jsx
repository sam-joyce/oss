import React, { Component } from 'react';
import styles from "./ProductPage.module.scss";

import ResponsivePlayer from "./ResponsivePlayer/ResponsivePlayer";

import { FaCheck } from 'react-icons/fa';
import { FaClipboardList } from 'react-icons/fa';
import { FaFile } from 'react-icons/fa';
import { FaHandshake } from 'react-icons/fa';
import ProductList from './ProductList/ProductList';

class ProductPage extends Component {
  state = {}
  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.inner_container}>
            <section className={styles.column1}>
              <article className={styles.video}>
                <ResponsivePlayer />
              </article>
              <article className={styles.noticeBoard}>
                Noticeboard
              </article>
            </section>
            <section className={styles.column2}>
              <article className={styles.productList}>
                <ProductList />
              </article>
            </section>
            <section className={styles.column3}>
              <article>
                <h4>Approvals</h4>
                <a href=""><FaCheck /></a>
              </article>
              <article>
                <h4>Tech Datasheets</h4>
                <a href=""><FaClipboardList /></a>
              </article>
              <article>
                <h4>Product Literature</h4>
                <a href=""><FaFile /></a>
              </article>
              <article>
                <h4>Legal Information</h4>
                <a href=""><FaHandshake /></a>
              </article>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default ProductPage;