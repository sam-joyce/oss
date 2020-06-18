import React, { Component } from 'react';
import styles from "./ProcessingPage.module.scss";
import { firestore } from "../../firebase";
import {
  Tabs,
  Tab
} from "react-bootstrap";
import ResponsivePlayer from "../ProductPage/ResponsivePlayer/ResponsivePlayer";
import Boxes from "../Utility/Boxes/Boxes";

import processing1 from "../Static/Images/processing1.jpg";
import processing2 from "../Static/Images/processing2.jpg";
import processing3 from "../Static/Images/processing3.jpg";

class ProcessingPage extends Component {
  state = {
    processes: [],
    processesB: []
  }

  componentDidMount() {
    firestore
      .collection("processes-bar")
      .get()
      .then((query) => {
        const processes = query.docs.map(doc => doc.data());
        // console.log('anything');
        // insert firestore section from below to avoid setting state twice
        this.setState({
          processes: processes
        });
      })
      .then(
        firestore
          .collection("processes-sheet")
          .get()
          .then((query) => {
            const processes = query.docs.map(doc => doc.data());
            // console.log('anything');
            this.setState({
              processesB: processes
            });
          })
      )
  }


  render() {
    // console.log(this.state.processes);
    return (
      <>
        <header>
          <h1>Processing at Offshore</h1>
          <hr />
          <p>We aren't just a stockholder! We offer a range of processing capabilities across <span>both</span> bar and sheet.</p>
          <hr />
        </header>
        <section className={styles.processing_images}>
          <img src={processing1} alt="1. processing at Offshore" />
          <img src={processing2} alt="2. processing at Offshore" />
          <img src={processing3} alt="3. processing at Offshore" />
        </section>
        <section className={styles.video_wrapper}>
          <article className={styles.video}>
            <p>Follow Scott, our Production Manager around our factory to see the machines in action, and for a walkthrough of the various processes we offer.</p>
            <article><ResponsivePlayer /></article>
          </article>
        </section>
        <Tabs defaultActiveKey="bar" id="uncontrolled-tab-example">
          <Tab eventKey="sheet" title="Sheet" className={styles.card_container}>
            <section className={styles.box}>
              {this.state.processesB.map((scard, index) => (
                <Boxes cardData={scard} key={index} />
              ))}
            </section>
          </Tab>
          <Tab eventKey="bar" title="Bar" className={styles.card_container}>
            <section className={styles.box}>
              {this.state.processes.map((bcard, index) => (
                <Boxes cardData={bcard} key={index} />
              ))}
            </section>
          </Tab>
        </Tabs>
      </>
    );
  }
}

export default ProcessingPage;