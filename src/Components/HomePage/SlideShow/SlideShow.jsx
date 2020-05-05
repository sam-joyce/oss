import React, { Component } from 'react';
import styles from "./SlideShow.module.scss";
import { Slide } from 'react-slideshow-image';

import image0 from "../../Static/Images/oss-logo.png";
import image1 from "../../Static/Images/slideshow1.jpg";
import image2 from "../../Static/Images/slideshow2.jpg";
import image3 from "../../Static/Images/slideshow3.jpg";
import image4 from "../../Static/Images/slideshow4.jpg";


class SlideShow extends Component {
  render() {
    const slideImages = [
      { image1 },
      { image2 },
      { image3 }
    ];

    const properties = {
      duration: 3000,
      transitionDuration: 800,
      infinite: true,
      indicators: true,
      arrows: true,
      pauseOnHover: true,
      onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
      }
    }
    return (
      <>
        <div className={styles.slide_container}>
          <Slide {...properties}>
            <div className={styles.each_slide}>
              <div>
                <img src={image0} alt="" />
                {/* <span>BAR</span> */}
              </div>
            </div>
            <div className={styles.each_slide}>
              <div>
                <img src={image1} alt="" />
                <span>BAR</span>
              </div>
            </div>
            <div className={styles.each_slide}>
              <div>
                <img src={image2} alt="" />
                <span>Sheet</span>
              </div>
            </div>
            <div className={styles.each_slide}>
              <div>
                <img src={image3} alt="" />
                <span>Stock</span>
              </div>
            </div>
            <div className={styles.each_slide}>
              <div>
                <img src={image4} alt="" />
                <span>Delivery</span>
              </div>
            </div>
          </Slide>
        </div>
      </>
    );
  }
}

export default SlideShow;
