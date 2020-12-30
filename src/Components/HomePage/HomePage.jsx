import React, { Component } from 'react';
import styles from "./HomePage.module.scss";
import sparks from '../Static/Images/sparks.png';

class HomePage extends Component {
  state = {}
  render() {
    return (
      <>
        <section className={styles.landing}>
          <img src={sparks} alt="A steel cutting tool in use" />
          <div className={styles.text_wrapper}>
            <h1>We are, <span>Offshore Stainless Supplies Ltd.</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur eum accusamus earum enim commodi excepturi neque facilis quasi unde. Error ex perferendis deleniti pariatur possimus cupiditate omnis blanditiis iste!</p>
          </div>
        </section>
        <section className={styles.second_section}>
          <div className={styles.second_section_1}>
            <h2>We supply a wide range of industries, including...</h2>
          </div>
          <div className={styles.second_section_2}>
            <div>
              <h2><span>01.</span> Oil & Gas...</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quod a unde ducimus inventore ipsa culpa quos soluta amet voluptate. Sint blanditiis consequuntur quibusdam in possimus porro eos et mollitia!</p>
            </div>
            <div>
              <h2><span>02.</span> Transport...</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quod a unde ducimus inventore ipsa culpa quos soluta amet voluptate. Sint blanditiis consequuntur quibusdam in possimus porro eos et mollitia!</p>
            </div>
            <div>
              <h2><span>03.</span> Internet Providers...</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quod a unde ducimus inventore ipsa culpa quos soluta amet voluptate. Sint blanditiis consequuntur quibusdam in possimus porro eos et mollitia!</p>
            </div>
          </div>
        </section>
        <section className={styles.third_section}>
          <div>
            <hr/>
            <h2>Featured Products<span>.</span></h2>
            <hr/>
          </div>
        </section>
      </>
    );
  }
}

export default HomePage;





















// import React, { Component } from 'react';
// import styles from "./HomePage.module.scss";
// import SlideShow from "./SlideShow/SlideShow";

// import video from '../Static/Images/ossl_video.jpg';
// import social from '../Static/Images/ossl_linkedin.jpg';
// import certified from '../Static/Images/ossl_certified.jpg';


// class HomePage extends Component {
//   state = {}
//   render() {
//     return (
//       <>
//         <SlideShow />
//         <section className={styles.welcome}>
//           <div className={styles.innerText}>
//             <h1>Welcome to <span>Offshore Stainless Supplies Limited.</span></h1>
//             <p>OSSL is a privately owned company formed in 1999 to supply high tensile stainless steel to the Offshore Industries. In **** OSSL introduced the stockholding and processing of 1.4003 to its capabilities, moving to our current premises in ****.</p>
//             <p>Offshore is now the market leader in the supply of cold drawn, high performance stainless steels, super duplex and nickels alloys. Complemented by the largest independent stock of ferritic stainless steel in Europe.</p>
//             <br />
//             <h5>ISO 9001:2015 Quality Accredited</h5>
//             <p>We are fully ISO 9001: 2015 accredited, demonstrating that we have a Quality Management System that is reviewed annually and audited externally every 3 years. This ensures we can consistently provide products and services that meet customer and applicable statutory and regulatory requirements. This accreditation provides assurance on our promise that you will always receive your ordered material on time!</p>
//           </div>
//         </section>
//         <section className={styles.hp_container}>
//           <h2>More information about the business</h2>
//           <hr/>
//           <article className={styles.hp_buttons}>
//             <section className={styles.card}>
//               <div className={styles.card_image}> 
//                 <img src={video} alt="video camera"/>
//               </div>
//               <div className={styles.card_info}>
//                 <h3>Company Video</h3>
//                 <p>Click below to find out a bit more about Offshore Stainless and how we work.</p>
//                 <button>Watch</button>
//               </div>
//             </section>
//             <section className={styles.card}>
//               <div className={styles.card_image}>
//                 <img src={social} alt="linkedin image"/>
//               </div>
//               <div className={styles.card_info}>
//                 <h3>Social Media</h3>
//                 <p>Connect with us on LinkedIn to keep up to date with our company progress and news.</p>
//                 <a href="https://www.linkedin.com/company/offshore-stainless-supplies-ltd/">
//                   <button>Connect</button>
//                 </a>
//               </div>
//             </section>
//             <section className={styles.card}>
//               <div className={styles.card_image}>
//                 <img src={certified} alt="certified stamp"/>
//               </div>
//               <div className={styles.card_info}>
//                 <h3>Accreditations</h3>
//                 <p>We are accredited by multiple bodies, click the button below to view an download.</p>
//                 <button>Learn</button>
//               </div>
//             </section>
//           </article>
//         </section>
//       </>
//     );
//   }
// }

// export default HomePage;