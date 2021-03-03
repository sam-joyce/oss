import React, { useEffect, useState } from 'react';
import styles from "./ProcessingPage.module.scss";
import { firestore } from "../../firebase";
import List from "../List";

import cutter from "../Static/Images/process.png";

const ProcessingPage = () => {
  const [barProcesses, setBarProcesses] = useState([]);
  const [sheetProcesses, setSheetProcesses] = useState([]);
  const [toggleProducts, setToggleProducts] = useState(true);

  const getBar = () => {
    firestore
      .collection('processes-bar')
      .get()
      .then((query) => {
        console.log(query);

        const processes = query.docs.map(doc => doc.data());
        setBarProcesses(processes);
        // console.log(processes);
      })
  }

  const getSheet = () => {
    firestore
      .collection('processes-sheet')
      .get()
      .then((query) => {
        console.log(query);

        const processes = query.docs.map(doc => doc.data());
        setSheetProcesses(processes);
        console.log(processes);
      })
  }

  const handleToggleBar = () => {
    setToggleProducts(true);
  }

  const handleToggleSheet = () => {
    setToggleProducts(false);
  }

  useEffect(() => {
    getBar();
    getSheet();
  }, []);

  const showProcessType = toggleProducts ? <List data={sheetProcesses} /> : <List data={barProcesses} />

  return (
    <>
      <section className={styles.intro_container}>
        <div className={styles.intro}>
          <h1>Our processes, <span>&<br /> production methods.</span></h1>
          <div>
            <p>All of the above processes are available for customers to provide material on a free issue basis that we will provide the product you require, subject to the material condition we receive.</p>
            <div>
              <button onClick={() => handleToggleBar()}>Sheet</button>
              <button onClick={() => handleToggleSheet()}>Bar</button>
            </div>
          </div>
        </div>
      </section>
      <img src={cutter} alt="Steel cutting" className={styles.cutting_image} />
      <section className={styles.process_container}>
        {showProcessType}
      </section>
    </>
  )
}

export default ProcessingPage;