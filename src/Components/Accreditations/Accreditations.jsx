import React, { Component } from 'react';
import styles from "./Accreditations.module.scss";

import { FaDownload } from 'react-icons/fa';

class Accreditations extends Component {
  render() { 
    return (
      <>
      <h1>Accreditations</h1>
      <hr className={styles.hrs}/>
      <p className={styles.first_p}>Please see below our companies range of accreditations, all available for download. Inside the two tabs are also our Bar and Sheet specific accreditations.</p>
      <hr className={styles.hrs}/>
      <section className={styles.accreditations}>
        <article>
        <p>Accreditation <FaDownload /></p>
        </article>
        <article>
        <p>Accreditation <FaDownload /></p>
        </article>
        <article>
        <p>Accreditation <FaDownload /></p>
        </article>
        <article>
        <p>Accreditation <FaDownload /></p>
        </article>
        <article>
        <p>Accreditation <FaDownload /></p>
        </article>
        <article>
        <p>Accreditation <FaDownload /></p>
        </article>
      </section>
      </>
    );
  }
}
 
export default Accreditations;