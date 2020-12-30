import React, { Component } from 'react';
import styles from "./AboutPage.module.scss";

import rig from "../Static/Images/oil-rig.png";
import chris from '../Static/Images/4926.jpg';
import keith from '../Static/Images/4734.jpg';
import paul from '../Static/Images/5134.jpg';

class AboutPage extends Component {
  state = {}
  render() {
    return (
      <>
        <section className={styles.about_landing}>
          <img src={rig} alt="AN oil rig" />
          <div className={styles.text_wrapper}>
            <h1>About <span>Offshore Stainless Supplies</span></h1>
            <p>Offshore is now the market leader in the supply of cold drawn, high performance stainless steels, super duplex and nickels alloys. Complemented by the largest independent stock of ferritic stainless steel in Europe.</p>
          </div>
        </section>
        <section className={styles.mission}>
          <h2>"To attract and attain customers with high-valued products and services and the most satisfying buying experience in the UK."</h2>
          <p>We are a privately owned Stainless Steel Stockholder processing much of our own stocks and specialist items within our facility at Walsall in the West Midlands. <br/> <br/> We have been supplying and supporting major industries with their stainless steel and nickel alloy requirements for over a decade. <br/> <br/>Our facility is 28,000 square feet divided between our stocking and manufacturing areas with over £6,000,000 invested in specific stocked items. <br/> <br/>We serve many different markets, including Offshore, Oil and Gas, Marine, Transportation, Automotive and Construction, both within the UK and worldwide. <br/> <br/>We are accredited with ISO 9001 2008. <br/> <br/>We have our own fleet of vehicles which allows us to be extremely flexible with deliveries within the UK and Ireland. Our products are also supplied throughout mainland Europe, the Middle East and the USA. <br/> <br/>Please browse our website for product and technical information.</p>
        </section>
        <section className={styles.people}>
          <div>
            <h2>This is us, <span>the people that make Offshore.</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, sapiente non alias, eius inventore mollitia dolorem, consequuntur quibusdam possimus molestiae nostrum. Cumque aut voluptate exercitationem deserunt possimus, eligendi provident asperiores.</p>
          </div>
          <div className={styles.bios}>
            <article>
              <img src={chris} alt="MD"/>
              <h3>Chris Joyce</h3>
              <h5>FOUNDER, MANAGING DIRECTOR</h5>
            </article>
            <article>
              <img src={keith} alt="CD"/>
              <h3>Keith Maskell</h3>
              <h5>COMMERCIAL DIRECTOR</h5>
            </article>
            <article>
              <img src={paul} alt="FD"/>
              <h3>Paul Kingston</h3>
              <h5>FINANCE DIRECTOR</h5>
            </article>
          </div>
        </section>
      </>
    );
  }
}

export default AboutPage;
















// import React, { Component } from 'react';
// import styles from "./AboutPage.module.scss";
// import infos from "../../data/about_data";
// import AboutItem from "../AboutItem";

// import chris from '../Static/Images/4926.jpg';
// import keith from '../Static/Images/4734.jpg';
// import paul from '../Static/Images/5134.jpg';

// class AboutPage extends Component {
//   state = {}
//   render() {
//     return (
//       <section className={styles.about_container}>
//         <div className={styles.about_intro}>
//           <p>WE ARE HERE TO HELP</p>
//           <h2>Our talented team operates to the highest standards to produce high quality products and amazing buying experiences for our customers.</h2>
//         </div>
//         <div className={styles.about_images}>
//           <div>
//             <img src={chris} alt="number one" />
//             <h3>Chris Joyce</h3>
//             <p>Managing Director, Founder</p>
//           </div>
//           <div>
//             <img src={keith} alt="number two" />
//             <h3>Keith Maskell</h3>
//             <p>Commercial Director</p>
//           </div>
//           <div>
//             <img src={paul} alt="number three" />
//             <h3>Paul Kingston</h3>
//             <p>Finance Director</p>
//           </div>
//         </div>
//         <div className={styles.about_header}>
//           <h2>An offshore experience...</h2>
//           <p>We are a professional, transparent team with over 20 years experience serving many industries such as oil and gas, communications and government.</p>
//         </div>
//         <article className={styles.about_items}>
//           {infos.map((info, index) => <AboutItem info={info} key={index} />)}
//         </article>
//       </section>
//     );
//   }
// }

// export default AboutPage;