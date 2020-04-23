import React, { Component } from 'react';
import styles from "./ProductPage.module.scss";

class ProductPage extends Component {
  state = {  }
  render() { 
    return (
      <p className={styles.para}>This is the Product Page</p>
    );
  }
}
 
export default ProductPage;