import React from 'react';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      fact: null,
    };
    this.setFact = this.setFact.bind(this);
  }

  setFact(data) {
    const randomIndex = Math.round(Math.random() * data.all.length);
    this.setState({
      fact: data.all[randomIndex].text,
    });
  }

  async componentDidMount() {
    const response = await fetch('https://cat-fact.herokuapp.com/facts');
    const data = await response.json();
    this.setFact(data);
  }

  render() {
    return (
      <div className="box">
        {!this.state.fact ? (
          <h1>LOADING FACT...</h1>
        ) : (
          <h1>{this.state.fact}</h1>
        )}
        <button onClick={this.setFact} disabled>
          Load New Fact
        </button>
      </div>
    );
  }
}

export default About;
