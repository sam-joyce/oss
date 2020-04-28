import React, { Component } from 'react';
import styles from "./ProductList.module.scss";
import Product from "../Product/Product";
import { firestore } from "../../../firebase";
import SearchBar from "./SearchBar/SearchBar";


class ProductList extends Component {
  state = {
    products: [],
    searchText: "",
    filteredProducts: []
  }

  setSearchText = (event)  => {
    const searchText = event.target.value;
    let filteredProducts = this.state.products.filter(products => {
      return products.name.includes(searchText);
    })
    this.setState({ searchText, filteredProducts })
  }

  componentDidMount() {
    firestore
      .collection("steel-bar")
      .get()
      .then((query) => {
        const products = query.docs.map(doc => doc.data());
        console.log('anything');
        this.setState({
          products: products,
          filteredProducts: products
        });
      })
  }

  render() { 
    console.log(this.state.searchText);
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