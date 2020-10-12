import React from 'react';

import { firebase, firebaseConfig } from '../fbdb';

import load from '../../img/load.gif';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      data: [],
    };
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  fetchPosts(data) {
    let posts = data.val();
    let ids = Object.keys(posts);
    const temp = [];

    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      temp.push(posts[id]);
    }

    this.setState({
      data: temp,
      ready: true,
    });
  }

  componentDidMount() {
    // 🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕
    let ref = firebase.database().ref('posts');
    ref.on('value', this.fetchPosts);
  }

  render() {
    return (
      <div className="blog">
        {!this.state.ready ? (
          <img src={load} alt="loading posts" />
        ) : (
          this.state.data.map((s) => (
            <div className="post" key={s.id}>
              {s.link ? <img src={s.link} alt={s.title} /> : ''}
              <h1>{s.title}</h1>
              <span class="info">{s.time}</span>
              <p>{s.post}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Blog;
