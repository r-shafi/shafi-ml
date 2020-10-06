import React from 'react';
import loading from '../api/loading.gif';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      fact: null,
    };
  }

  async componentDidMount() {
    const response = await fetch('https://cat-fact.herokuapp.com/facts');
    const data = await response.json();
    const getFact = () => {
      const randomIndex = Math.round(Math.random() * data.all.length);
      this.setState({
        fact: data.all[randomIndex].text,
      });
    };
    getFact();
    setInterval(getFact, 30000);
  }

  render() {
    return (
      <div className="box">
        {!this.state.fact ? (
          <img src={loading} alt="loading" />
        ) : (
          <h2>{this.state.fact}</h2>
        )}
      </div>
    );
  }
}

export default About;
