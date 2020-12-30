import React, { Component } from 'react';
import styles from "./ProductPage.module.scss";
import { Link } from '@reach/router';

import bar from "../Static/Images/bar.png";
import sheet from "../Static/Images/sheet.png";

class ProductPage extends Component {
  state = {}
  render() {
    return (
      <>
        <section className={styles.intro}>
          <h1>Our products, <br /><span>all in one place.</span></h1>
        </section>
        <div className={styles.pictures}>
          <img src={sheet} alt="sheet steel" />
          <img src={bar} alt="bar steel" />
        </div>
        <section className={styles.speciality}>
          <h2>Our stainless steel sheet, <span>1.4003.</span></h2>
          <p>Type 1.4003 stainless steel is a utility ferritic stainless steel, often used in place of mild steel. It offers the benefits of more highly alloyed stainless steels such as strength, corrosion and abrasion resistance, durability and low maintenance. <br /> <br /> In addition type 1.4003 Is weldable and formable allowing it to be fabricated using conventional techniques.</p>
        </section>
        <section className={styles.additional}>
          <article>
            <h3>Expert Craftmanship<span>.</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit eget est cursus etiam. Viverra aliquam porttitor nulla pretium. Ultricies vulputate habitant nec vitae id rutrum. Integer vel dolor ullamcorper facilisi lacus. Nisl, lectus massa quis velit enim donec sit eu ornare. Imperdiet id in ac a molestie id sagittis. Suspendisse at tincidunt tortor, luctus lobortis dictumst.</p>
          </article>
          <article>
            <h3>Made to order<span>.</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in massa adipiscing quis orci, sit amet elementum. Sed purus euismod sed suspendisse. Eget facilisis habitasse id dui. Egestas turpis varius ullamcorper odio amet semper neque gravida. Lectus leo egestas id at enim volutpat pharetra sit.</p>
          </article>
          <article>
            <h3>Benefits<span>.</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in massa adipiscing quis orci, sit amet elementum. Sed purus euismod sed suspendisse. Eget facilisis habitasse id dui: <br />- Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />- Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />-Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </article>
        </section>
        <section className={styles.contact_banner}>
          <h3>Want a quote?</h3>
          <Link to="/contact"><button>Contact Us</button></Link>
        </section>
      </>
    );
  }
}

export default ProductPage;







// import React, { Component } from 'react';
// import styles from "./ProductPage.module.scss";
// import { firestore } from '../../firebase';

// import ProductList from "./ProductList";


// class ProductPage extends Component {
//   state = {
//     showBar: true,
//     bars: [],
//     sheets: []
//   }

//   fetchBar() {
//     firestore
//       .collection('steel-bar')
//       .get().then((bars) => {
//         const items = bars.docs.map((bar) => {
//           return bar.data();
//         })
//         this.setState({ bars: items })
//       })
//   }


//   fetchSheet() {
//     firestore
//       .collection('steel-sheet')
//       .get()
//       .then((sheets) => {
//         const items = sheets.docs.map(sheet => {
//           return sheet.data()
//         })
//         this.setState({ sheets: items })
//       })
//   }

//   componentDidMount() {
//     this.fetchBar()
//     this.fetchSheet()
//   }

//   render() {
//     const productType = this.state.showBar 
//       ? <ProductList products={this.state.bars} /> 
//       : <ProductList products={this.state.sheets} />;
//     return (
//       <>
//         <section className={styles.header}>
//           <h1>Stock</h1>
//           <p>We have over £8,000,000 of stock across both Bar and Sheet to ensure we can meet every one of your requirments. <br /> Please see below for a breakdown of this stock.</p>
//           <hr />
//         </section>
//         <div className={styles.product_buttons}>
//           <button onClick={() => this.setState({ ...this.state, showBar: true })}>Bar</button>
//           <button onClick={() => this.setState({ ...this.state, showBar: false })}>Sheet</button>
//         </div>
//         <section className={styles.products}>
//           {productType}
//         </section>
//       </>
//     );
//   }
// }

// export default ProductPage;