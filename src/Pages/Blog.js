import React from 'react';
import { firebase } from '../Private/Config';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loaded: false,
    };
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  fetchPosts(data) {
    let posts = data.val();
    let ids = Object.keys(posts).reverse();

    const postArray = [];

    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      postArray.push(posts[id]);
    }

    this.setState({
      posts: postArray,
      loaded: true,
    });
  }

  componentDidMount() {
    let ref = firebase.database().ref('posts');
    ref.on('value', this.fetchPosts);
  }

  render() {
    return (
      <div className="blog">
        {!this.state.loaded ? (
          <h1>BLOG POSTS LOADING...</h1>
        ) : (
          this.state.posts.map((post, i) => (
            <div className="post" key={i}>
              {post.link ? <img src={post.link} alt={post.title} /> : null}
              <h1>{post.title}</h1>
              <span className="info">{post.time}</span>
              <p>{post.post}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Blog;
