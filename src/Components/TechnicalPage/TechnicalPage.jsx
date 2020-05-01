import React, { Component } from 'react';
import styles from "./TechnicalPage.module.scss";
import {
  Tabs,
  Tab
} from "react-bootstrap";

import Accreditations from '../Accreditations/Accreditations';
import BarAccreditationList from './BarAccreditationList/BarAccreditationList';
import SheetAccreditationList from './SheetAccreditationList/SheetAccreditationList';

class TechnicalPage extends Component {
  render() {
    return (
      <>
        <Accreditations />
        <section>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Sheet">
              <SheetAccreditationList />
            </Tab>
            <Tab eventKey="profile" title="Bar">
                <BarAccreditationList />
            </Tab>
          </Tabs>
        </section>
      </>
    );
  }
}

export default TechnicalPage;