import React, { Component } from 'react';
import styles from "./ProductList.module.scss";
import Product from "../Product/Product";

class ProductList extends Component {
  render() { 
    return (
      <>
        <section className={styles.products}>
          {this.props.products.map((prod, index) => (
            <Product productData={prod} key={index} />
          ))}
        </section>
      </>
    );
  }
}
 
export default ProductList;