import React, { useState, useEffect } from 'react';
import styles from './BarProduct.module.scss';
import { firestore } from '../../firebase';
import ProductList from '../ProductPage/ProductList';

const BarProduct = () => {

  const [products, setProducts] = useState('');
  const [productShowing, setProductShowing] = useState([]);

  const fetchProducts = () => {
    firestore
      .collection('bar-products')
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
        <h2>Our stainless steel <br/><span>Bar</span></h2>
        <p>In addition to cold drawn materials, we can also offer forged sections either in the fully machined condition or black as forged for customers to finish themselves. <br/><br/> Our factory in the West Midlands has cold drawing, linishing, roll marking and straightening facilities which enables us to offer prompt delivery times for special customer requirements.</p>
      </section>
      <section className={styles.button_container}>
        <button onClick={(event) => filterShownProducts(event)}>Hexagonal</button>
        <button onClick={(event) => filterShownProducts(event)}>Round</button>
        <button onClick={(event) => filterShownProducts(event)}>Flat/Square</button>
      </section>
      <ProductList data={productShowing} />
    </>
  )
}

export default BarProduct;
