import React, { useState, useEffect } from 'react';
import styles from './SheetProduct.module.scss';
import info from '../../data/product-info';
import { firestore } from "../../firebase";

const SheetProduct = () => {

  const [products, setProducts] = useState([]);
  const [productShowing, setProductShowing] = useState([]);

  const fetchProducts = () => {
    firestore
      .collection('sheet-products')
      .get()
      .then((query) => {
        // console.log(query);
        const products = query.docs.map(doc => doc.data());
        setProducts(products);
        // console.log(products);
      })
  }

  const filterShownProducts = (event) => {
    const arr = products.filter(product => product.type == event.target.innerText);
    setProductShowing(arr);
    return arr;
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <>
      <section className={styles.speciality}>
        <h2>Our stainless steel sheet, <span>1.4003.</span></h2>
        <p>Type 1.4003 stainless steel is a utility ferritic stainless steel, often used in place of mild steel. It offers the benefits of more highly alloyed stainless steels such as strength, corrosion and abrasion resistance, durability and low maintenance. <br /> <br /> In addition type 1.4003 is weldable and formable allowing it to be fabricated using conventional techniques.<br/><span>*Also available widths in coil. <br/> Scroll down to see our product list.</span></p>
      </section>

      {/* <section className={styles.button_container}>
        <button onClick={(event) => filterShownProducts(event)}>420</button>
        <button onClick={(event) => filterShownProducts(event)}>1.4003</button>
      </section> */}

      <section className={styles.sheet_container}>
        {products.sort((a, b) => a.size - b.size).map((product, index) => (
          <article key={index}>
            <h3>{product.category}</h3>
            <h5>Size: {product.size}mm</h5>
            <h5>Dimensions: {product.dimensions}</h5>
          </article>
        ))}
      </section>

      <section className={styles.additional}>
        {info.map(i => {
          return (
            <article>
              <h3>{i.heading}<span>.</span></h3>
              <p>{i.text}</p>
            </article>
          )
        })}
        <article>
          <h3>Benefits<span>.</span></h3>
          <ul>
            <li>250 times greater corrosion resistance than mild steel</li>
            <li>Corrosion/abrasion resistance</li>
            <li>Economical - Low initial cost, low maintenance</li>
            <li>High Strength</li>
            <li>Excellent impact resistance</li>
          </ul>
        </article>
      </section>
    </>
  )
}

export default SheetProduct;
