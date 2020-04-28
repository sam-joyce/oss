import React, { Component } from 'react';
import styles from "./Product.module.scss";
// import Measurements from './Measurements/Measurements';

class Product extends Component {
  render() { 
    return (
      <section className={styles.product}>
        <h5>{this.props.productData.name}</h5>
      </section>
    );
  }
}
 
export default Product;