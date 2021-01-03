import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from "../../client.js";

import styles from "./News.module.scss";

const News = () => {

  const [postData, setPost] = useState(null);

  useEffect(() => {
    console.log('running');
    sanityClient
      .fetch(`*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`)
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main>
      <section>
        <section className={styles.intro}>
          <h1>Our latest, <br /><span>news & developments.</span></h1>
        </section>
        <div className={styles.posts_container}>
          {postData && postData.map((post, index) => (
            <article key={index}>
              <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                <span key={index}>
                  <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                  <span>
                    <h3>{post.title}</h3>
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default News;