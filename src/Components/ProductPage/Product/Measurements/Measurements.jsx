import React, { Component } from 'react';
import styles from "./Measurements.module.scss";

class Measurements extends Component {
  state = {  }
  render() { 
    return (
      <article className={styles.measurements}>
        <li>
          <ul>Diameter: {}</ul>
          <ul>Length: {}</ul>
          <ul>Width: {}</ul>
        </li>
      </article>
    );
  }
}
 
export default Measurements;