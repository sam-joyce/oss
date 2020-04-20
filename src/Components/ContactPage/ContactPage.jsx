import React, { Component } from 'react';
import styles from "./ContactPage.module.scss";

class ContactPage extends Component {
  state = {}
  render() {
    return (
      <>
        <header className={styles.img_box}>
          <div className={styles.color_overlay}></div>
          <h1>Contact Us</h1>
          {/* <h2>We'd love to hear from you.</h2> */}
        </header>

        <section className={styles.container}>
          <div className={styles.inner_container}>
            <div>
              <div className={styles.form_wrapper}>
                <div>
                  <p>If you would like to get in touch with us, please complete the form below or call us on the number shown. Click the location map on the right hand side for directions on how to find us:</p>
                  <fieldset>
                    <h5>Name *</h5>
                    <section id={styles.names_box}>
                      <div>
                        <input type="text" name="fname" />
                        <span>First Name</span>
                      </div>
                      <div>
                        <input type="text" name="lname" />
                        <span>Last Name</span>
                      </div>
                    </section>
                  </fieldset>
                </div>
                <div>
                  <h5>Email *</h5>
                  <input type="email" name="email" />
                </div>
                <div>
                  <h5>Subject *</h5>
                  <input type="text" name="subject" />
                </div>
                <div>
                  <h5>Message *</h5>
                  <input type="text" name="message" id={styles.message} />
                </div>
                <button>SUBMIT</button>
              </div>
            </div>
            <div></div>
            <div>
              <div id={styles.address}>
                <p>
                  Offshore Stainless Supplies Ltd
                  <br />
                  Toll Point <br/>
                  Lichfield Road <br/>
                  Brownhills <br/>
                  Walsall <br/>
                  West Midlands <br/>
                  WS8 6JZ <br/><br/>
                  T: +44 (0)1922 414003 <br/>
                  F: +44 (0)1922 414606
                </p>
              </div>
              <div id={styles.breaker}><hr /></div>
              <div id={styles.map}></div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ContactPage;