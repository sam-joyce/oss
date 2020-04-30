import React, { Component } from 'react';
import styles from "./TechnicalPage.module.scss";
import {
  Tabs,
  Tab
} from "react-bootstrap";

import Accreditations from '../Accreditations/Accreditations';

class TechnicalPage extends Component {
  render() {
    return (
      <>
        <Accreditations />
        <section>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Sheet">
              <h1>Sheet</h1>
            </Tab>
            <Tab eventKey="profile" title="Bar">
              <h1>Bar</h1>
            </Tab>
          </Tabs>
        </section>
      </>
    );
  }
}

export default TechnicalPage;