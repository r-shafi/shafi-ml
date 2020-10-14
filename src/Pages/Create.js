import React from 'react';

import { firebase } from '../Private/Config';

const blogPosts = firebase.database().ref('posts');

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      link: '',
      post: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, link, post } = this.state;

    let newPost = blogPosts.push();

    newPost.set({
      title,
      link,
      post,
      time: Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
        new Date()
      ),
    });

    alert('POST CREATED 🎉');
  }

  render() {
    const { title, link, post } = this.state;

    return (
      <main className="create">
        <form>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />

          <label htmlFor="link">Image URL:</label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={this.handleChange}
          />

          <label htmlFor="post">Post:</label>
          <textarea id="post" value={post} onChange={this.handleChange} />

          <button type="submit" onClick={this.handleSubmit}>
            SUBMIT
          </button>
        </form>
      </main>
    );
  }
}

export default Create;
