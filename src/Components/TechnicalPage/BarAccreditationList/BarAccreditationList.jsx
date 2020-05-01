import React, { Component } from 'react';
import styles from "./BarAccreditationList.module.scss";
import { firestore } from "../../../firebase";
import BarAccreditation from "./BarAccreditation/BarAccreditation";

class BarAccreditationList extends Component {
  state = {
    bar_accreditation: [],
  }

  componentDidMount() {
    firestore
      .collection("bar-accreditations")
      .get()
      .then((query) => {
        const bar_accreditation = query.docs.map(doc => doc.data());
        console.log('anything');
        this.setState({
          bar_accreditation: bar_accreditation,
        });
      })
  }



  render() { 
    return (
      <>
        <section className={styles.container}>
        {this.state.bar_accreditation.map((acc, index) => (
            <BarAccreditation BarAccreditationData={acc} key={index} />
          ))}
        </section>
      </>
    );
  }
}
 
export default BarAccreditationList;