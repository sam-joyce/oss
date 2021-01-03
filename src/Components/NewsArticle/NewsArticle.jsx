import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

import styles from "./NewsArticle.module.scss"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const NewsArticle = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    console.log('news article mounted')
    sanityClient.fetch(`*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`).then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);


  if (!singlePost) return <div>Loading...</div>

  return (
    <main>
      <article>
        <header>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className={styles.cover_image}
          />
          <div>
            <div>
              <h1>{singlePost.title}</h1>
              <div>
                <img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} />
                <p>{singlePost.name}</p>
              </div>
            </div>
          </div>
        </header>
        <div className={styles.post_body}>
          <BlockContent
            blocks={singlePost.body}
            projectId="plsb83f9"
            dataset="production"
          />
        </div>
      </article>
    </main>
  )
}

export default NewsArticle;
