import React, { Component } from 'react';
import styles from "./BarAccreditation.module.scss";

class BarAccreditation extends Component {
  state = {}
  render() { 
    return (
      <section className={styles.accreditation}>
        <h3>{this.props.BarAccreditationData.name}</h3>
        <p>{this.props.BarAccreditationData.text}</p>
      </section>
    );
  }
}
 
export default BarAccreditation;