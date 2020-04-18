import React, { Component } from 'react';
import styles from "./HomePage.module.scss";

class HomePage extends Component {
  state = {  }
  render() { 
    return (
      
      <div className={styles.container}>
        <div>Looking for Bar</div>
        <div>Looking for Sheet</div>
      </div>
    );
  }
}
 
export default HomePage;