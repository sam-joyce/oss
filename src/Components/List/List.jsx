import React from 'react';
import styles from "./List.module.scss";

const List = (props) => {
  console.log(props);
  return (
    <>
      {/* {props.data.map((d, index) => {
        return <article key={index} className={styles.list_item}>
          <h2><span>0{index + 1}.</span> <br/> {d.process}</h2>
          <p>{d.explanation}</p>
        </article>
      })} */}

      {props.data.map((d, index) => {
        return <article key={index} className={styles.list_item}>
          <h3>{d.process}</h3>
          <p>{d.explanation}</p>
        </article>
      })}
    </>
  )
}

export default List;
