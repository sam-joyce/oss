import React, { Component } from 'react';
import styles from "./AboutPage.module.scss";

import about from "../Static/Images/about.jpg";
import team from "../Static/Images/team.jpg";


class AboutPage extends Component {
  state = {}
  render() {
    return (
      <section className={styles.container}>
        <article>
          <h2>About Us</h2> <br/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis iste nihil velit! Illum ipsa rem quidem officiis esse deleniti in voluptatibus officia velit! Quod eos, quidem quibusdam error possimus perferendis? <br/> <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quod molestias incidunt laudantium, ipsa atque repudiandae soluta illo consequatur nesciunt iusto tempore. Provident doloremque dolor ipsam voluptas amet alias hic.</p>
        </article>
        <article>
          <img src={about} alt=""/>
        </article>
        <article>
          <img src={team} alt=""/>
        </article>
        <article>
        <h2>Why Offshore?</h2> <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam modi, sunt ipsam illum blanditiis, officia reiciendis necessitatibus natus debitis, quis nisi eligendi. Animi commodi amet eum quasi harum nihil. <br/> <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia, iure consequatur itaque porro voluptatum labore soluta. Reprehenderit ipsum, a ducimus, explicabo, voluptas animi fugit minima optio cupiditate harum nisi.</p>
        </article>
      </section>
    );
  }
}

export default AboutPage;