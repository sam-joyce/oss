import React, { useEffect, useState } from 'react';
import styles from "./ProcessingPage.module.scss";
import { firestore } from "../../firebase";

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
        console.log(processes);
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

  useEffect(() => {
    getBar();
    getSheet();
  }, []);


  return (
    <>
      <section className={styles.intro_container}>
        <div className={styles.intro}>
          <h1>Our products, <br /><span>all in one place.</span></h1>
          <div>
            <p>Learn more about the production methods we use to create our high-quality stainless steel bar and sheet. Just use the buttons below.</p>
            <div>
              <button>Sheet</button>
              <button>Bar</button>
            </div>
          </div>
        </div>
      </section>
      <img src={cutter} alt="Steel cutting" className={styles.cutting_image} />
    </>
  )
}

export default ProcessingPage;