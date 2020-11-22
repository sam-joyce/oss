import React from 'react';
import styles from "./News.module.scss";
import Strapi from 'strapi-sdk-javascript/build/main';
const strapi = new Strapi('http://localhost:1337');

class News extends React.Component {
  state = {
    posts: []
  }
  async componentDidMount() {
    try {
      const posts = await strapi.getEntries('newsposts')
      this.setState({ posts });
    }
    catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <>
        <h3 id={styles.title}>Noticeboard</h3>
        <section className={styles.noticeboard}>
          {this.state.posts.map(post => {
            return (
              <article className={styles.post}>
                <h3>Title: {post.title}</h3>
                <h6>Date: {post.posted}</h6>
                <p>Content: {post.content}</p>
              </article>
            )
          })}
        </section>
      </>
    )
  }
}
export default News;