import React, { Component } from 'react';
import styles from "./Product.module.scss";
// import Measurements from './Measurements/Measurements';

class Product extends Component {
  state = {  }
  render() { 
    return (
      <section className={styles.product}>
        <h2>{this.props.productData.name}</h2>
        {/* <article>
          <Measurements />
        </article> */}
      </section>
    );
  }
}
 
export default Product;