import React, { Component } from 'react';

import {
  Tabs,
  Tab
} from "react-bootstrap";

class ProcessingPage extends Component {
  state = {}
  render() {
    return (
      <>
        <h1>Processing</h1>
        <hr />
        <p>We aren't just a stockholder! We offer a range of processing capabilities acros <span>both</span> bar and sheet. Please see below for specifics on each option.</p>
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

export default ProcessingPage;