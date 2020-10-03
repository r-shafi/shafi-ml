import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h: new Date().getHours(),
      m: new Date().getMinutes(),
      s: new Date().getSeconds(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        h: new Date().getHours(),
        m: new Date().getMinutes(),
        s: new Date().getSeconds(),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <h1>
          {this.state.h < 13 ? this.state.h : this.state.h - 12}:
          {this.state.m < 10 ? '0' + this.state.m : this.state.m}:
          {this.state.s < 10 ? '0' + this.state.s : this.state.s}
        </h1>
        <h6>
          {Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
            new Date()
          )}
        </h6>
      </div>
    );
  }
}

export default Clock;
