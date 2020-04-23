import React, { Component } from 'react';
import styles from "./ProductPage.module.scss";

class ProductPage extends Component {
  state = {}
  render() { 
    return (
      <>
        <div className={styles.container}>
          <div className={styles.inner_container}>
            <section className={styles.column1}>
              <article className={styles.video}>
                Video
              </article>
              <article className={styles.noticeBoard}>
                Noticeboard
              </article>
            </section>
            <section className={styles.column2}>
              <article className={styles.productList}>
                Product List
              </article>
            </section>
            <section className={styles.column3}>
              <article>Approvals</article>
              <article>Tech Datasheets</article>
              <article>Product Literature</article>
              <article>Legal Information</article>
            </section>
          </div>
        </div>
      </>
    );
  }
}
 
export default ProductPage;