import React, { Component } from 'react';
import styles from "../BarAccreditationList/BarAccreditationList.module.scss";
import { firestore } from "../../../firebase";
import SheetAccreditation from "./SheetAccreditation/SheetAccreditation";

class SheetAccreditationList extends Component {
  state = {
    sheet_accreditation: [],
  }

  componentDidMount() {
    firestore
      .collection("sheet-accreditations")
      .get()
      .then((query) => {
        const sheet_accreditation = query.docs.map(doc => doc.data());
        console.log('anything');
        this.setState({
          sheet_accreditation: sheet_accreditation,
        });
      })
  }

  render() { 
    return (
      <>
        <section className={styles.container}>
        {this.state.sheet_accreditation.map((acc, index) => (
            <SheetAccreditation SheetAccreditationData={acc} key={index} />
          ))}
        </section>
      </>
    );
  }
}
 
export default SheetAccreditationList;