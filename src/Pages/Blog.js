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
    this.showPost = this.showPost.bind(this);
  }

  showPost(e) {
    const target = e.target;
    const p = target.querySelector('.post_para');
    p.className = 'show';
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
            <div className="post" key={i} onClick={this.showPost}>
              {post.link ? <img src={post.link} alt={post.title} /> : null}
              <div>
                <h1>{post.title}</h1>
                <span className="info">{post.time}</span>
                <p className="post_para">{post.post}</p>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Blog;
