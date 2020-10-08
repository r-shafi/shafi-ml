import React from 'react';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      data: [],
    };
  }

  async componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const res = await fetch(url);
    const data = await res.json();
    this.setState({
      ready: true,
      data,
    });
  }

  render() {
    return (
      <div className="blog">
        {!this.state.ready ? (
          <h1>LOADING...</h1>
        ) : (
          this.state.data.map((s) => (
            <div className="post" key={s.id}>
              <h1>{s.title}</h1>
              <p>{s.body}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Blog;
