import React, { Component } from 'react';
import styles from "./AlloyPage.module.scss";

import {
  Tabs,
  Tab
} from "react-bootstrap";

class AlloyPage extends Component {
  state = {}
  render() {
    return (
      <>
        <h1>Alloys</h1>
        <hr />
        <p className={styles.firstP}>We have extensive stock of all the alloys listed below and with our own fleet of delivery vehicles these can be delivered to your as quickly as possible.</p>
        <hr />
        <Tabs defaultActiveKey="bar" id="uncontrolled-tab-example">
          <Tab eventKey="sheet" title="Sheet">
          </Tab>
          <Tab eventKey="bar" title="Bar">
          </Tab>
        </Tabs>
      </>
    );
  }
}

export default AlloyPage;