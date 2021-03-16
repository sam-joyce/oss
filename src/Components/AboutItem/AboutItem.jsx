import React from 'react';
import styles from "./AboutItem.module.scss";

const AboutItem = (props) => {

  const {
    name,
    title,
    image
  } = props.member;

  return (
    <article>
      <img src={image} alt="Employee Headshot" />
      <h3>{name}</h3>
      <h5>{title.toUpperCase()}</h5>
    </article>
  )
}

export default AboutItem
