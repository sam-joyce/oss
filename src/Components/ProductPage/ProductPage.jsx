import React, { Component } from 'react';
import styles from "./ProductPage.module.scss";
import { firestore } from '../../firebase';

import ProductList from "./ProductList";


class ProductPage extends Component {
  state = {
    showBar: true,
    bars: [],
    sheets: []
  }

  fetchBar() {
    firestore
      .collection('steel-bar')
      .get().then((bars) => {
        const items = bars.docs.map((bar) => {
          return bar.data();
        })
        this.setState({ bars: items })
      })
  }


  fetchSheet() {
    firestore
      .collection('steel-sheet')
      .get()
      .then((sheets) => {
        const items = sheets.docs.map(sheet => {
          return sheet.data()
        })
        this.setState({ sheets: items })
      })
  }

  componentDidMount() {
    this.fetchBar()
    this.fetchSheet()
  }

  render() {
    const productType = this.state.showBar 
      ? <ProductList products={this.state.bars} /> 
      : <ProductList products={this.state.sheets} />;
    return (
      <>
        <section className={styles.header}>
          <h1>Stock</h1>
          <p>We have over £8,000,000 of stock across both Bar and Sheet to ensure we can meet every one of your requirments. <br /> Please see below for a breakdown of this stock.</p>
          <hr />
        </section>
        <div className={styles.product_buttons}>
          <button onClick={() => this.setState({ ...this.state, showBar: true })}>Bar</button>
          <button onClick={() => this.setState({ ...this.state, showBar: false })}>Sheet</button>
        </div>
        <section className={styles.products}>
          {productType}
        </section>
      </>
    );
  }
}

export default ProductPage;