import React, { Component } from 'react';
import styles from "../../BarAccreditationList/BarAccreditation/BarAccreditation.module.scss";

class SheetAccreditation extends Component {
  state = {}
  render() { 
    return (
      <section className={styles.accreditation}>
        <h3>{this.props.SheetAccreditationData.name}</h3>
        <p>{this.props.SheetAccreditationData.text}</p>
      </section>
    );
  }
}
 
export default SheetAccreditation;