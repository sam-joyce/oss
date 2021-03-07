import React from 'react';
import styles from "./ProductList.module.scss";

const ProductList = (props) => {
  const { data } = props;
  return (
    <section className={styles.bar_container}>
      {data.map((d, index) => (
        <article key={index}>
          <h3><span>Grade:</span> <br/> {d.grade}</h3>
          <h5><span>Size Range:</span> <br/> {d.size_range}</h5>
        </article>
      ))}
    </section>
  )
}

export default ProductList;