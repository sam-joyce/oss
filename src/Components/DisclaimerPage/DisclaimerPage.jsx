import React, { Component } from 'react';
import styles from "./DisclaimerPage.module.scss";

class DisclaimerPage extends Component {
  state = {}
  render() {
    return (
      <div className={styles.disclaimer_container}>
      <section className={styles.disclaimer_inner}>
        <h2>Disclaimer - All Products Supplied</h2>
        <br/>
        <h6>This information for all products is based on our present knowledge and is given in good faith.
        <br/> <br/>
        However, no liability will be accepted by Offshore Stainless Supplies Ltd in respect of any action taken by any third party in reliance thereon, as the products detailed may be used for a wide variety of purposes and Offshore Stainless Supplies Ltd has no control over their use.
        <br/> <br/>
        Offshore Stainless Supplies Ltd specifically excludes all conditions or warranties expressed or implied by statute or otherwise as to dimensions, properties and / or fitness for any particular purpose.Any advice given by Offshore Stainless Supplies Ltd to any third party is given for that party`s assistance only and without liability on the part of Offshore Stainless Supplies Ltd.
        <br/> <br/>
        Any contract between Offshore Stainless Supplies Ltd and a customer will be subject to our conditions of sale. The extent of our liabilities to any customer is clearly set out in those conditions; a copy of which is available on request.
        <br/> <br/>
        Thank you!
        </h6>
      </section>
      </div>
    );
  }
}
 
export default DisclaimerPage;