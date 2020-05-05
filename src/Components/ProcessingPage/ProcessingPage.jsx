import React, { Component } from 'react';
import styles from "./ProcessingPage.module.scss";
import {
  Tabs,
  Tab
} from "react-bootstrap";
import ResponsivePlayer from "../ProductPage/ResponsivePlayer/ResponsivePlayer";

import processing1 from "../Static/Images/processing1.jpg";
import processing2 from "../Static/Images/processing2.jpg";
import processing3 from "../Static/Images/processing3.jpg";

class ProcessingPage extends Component {
  state = {}
  render() {
    return (
      <>
        <header>
          <h1>Processing at Offshore</h1>
          <hr />
          <p>We aren't just a stockholder! We offer a range of processing capabilities across <span>both</span> bar and sheet.</p>
          <hr />
        </header>
        <section className={styles.processing_images}>
          <img src={processing1} alt="" />
          <img src={processing2} alt="" />
          <img src={processing3} alt="" />
        </section>
        <section className={styles.video_wrapper}>
          <article className={styles.video}>
            <p>Follow Scott, our Production Manager around our factory to see the machines in action, and for a walkthrough of the various processes we offer.</p>
            <article><ResponsivePlayer /></article>
          </article>
        </section>
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