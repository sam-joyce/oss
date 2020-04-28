import React, { Component } from 'react';
import styles from "./ProductList.module.scss";
import { firestore } from "../../../firebase";

import SearchBar from "./SearchBar/SearchBar";
import Product from "../Product/Product";

class ProductList extends Component {
  state = {
    products: [],
    searchText: "",
    filteredProducts: []
  }

  setSearchText = (event)  => {
    const searchText = event.target.value;
    this.setState({ searchText }, this.filteredProducts)
  }

  filteredProducts = () => {
    let filteredProducts = this.state.products.filter(products => {
      return products.name.includes(this.state.searchText);
    })
    this.setState({ filteredProducts })
  }

  componentDidMount() {
    firestore
      .collection("steel-bar")
      .get()
      .then((query) => {
        const products = query.docs.map(doc => doc.data());
        this.setState({
          products: products,
          filteredProducts: products
        });
      })
  }

  render() { 
    console.log(this.SearchText);
    return (
      <>
        <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText}/>
        <section className={styles.products}>
          {this.state.filteredProducts.map((prod, index) => (
            <Product productData={prod} key={index} />
          ))}
        </section>
      </>
    );
  }
}
 
export default ProductList;