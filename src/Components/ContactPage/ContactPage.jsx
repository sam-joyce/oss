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
                <button id={styles.submit}>SUBMIT</button>
              </div>
            </div>
            <div></div>
            <div>
              <div id={styles.address}>
                <p>
                  Offshore Stainless Supplies Ltd
                  <br />
                  Toll Point <br />
                  Lichfield Road <br />
                  Brownhills <br />
                  Walsall <br />
                  West Midlands <br />
                  WS8 6JZ <br /><br />
                  T :<a href="tel: 01922414003">+44 (0)1922 414003</a> <br />
                  F :<a href="tel: 01922414606">+44 (0)1922 414606</a>
                </p>
              </div>
              <div id={styles.breaker}><hr /></div>
              <div id={styles.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38727.90248578462!2d-2.005216007642915!3d52.65105593874914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48709f9881ea4ff9%3A0xf3299b5b372f7b8b!2sOffshore%20Stainless%20Supplies%20Ltd!5e0!3m2!1sen!2suk!4v1587463536287!5m2!1sen!2suk">
                </iframe>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ContactPage;