import React, { Component } from 'react';
import styles from "./AboutItem.module.scss";

class AboutItem extends Component {

  render() {
    return (
      <div className={styles.item_container}>
        <img src={this.props.info.image} alt="mapped images" />
        <h3>{this.props.info.title}</h3>
        <p>{this.props.info.text}</p>
      </div>
    );
  }
}

export default AboutItem;