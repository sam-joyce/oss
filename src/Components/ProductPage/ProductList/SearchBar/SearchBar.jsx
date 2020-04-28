import React, { Component } from 'react';
import styles from "./SearchBar.module.scss";

class SearchBar extends Component {
  state = {  }
  render() { 
    return (
      <input 
        className={styles.searchBar}
        placeholder="Explore our range of products"
        value={this.props.searchText}
        onChange={this.props.setSearchText}
      />
    );
  }
}
 
export default SearchBar;