import React, { Component } from "react";

class ClockContainer extends Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {

    const displayDate = this.state.date.toLocaleTimeString();
    return (
      <div>
        <h1>Hello.</h1>
        <h2>It is {displayDate}.</h2>
      </div>
    );
  }
}

export default ClockContainer;