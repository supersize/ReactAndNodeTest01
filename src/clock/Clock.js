import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date : new Date()};
  }

  componentDidMount () {
    this.timeID = setInterval(
      () => this.tick()
    , 1000);
  }

  componentWillUnmount () {
    clearInterval(this.timeID);
  }

  tick () {
    this.setState ({date : new Date()}); 
  }

  render () {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>It's {this.state.date.toLocaleTimeString()}.</h2>
        <h2>Hi I'm Kim</h2>
      </div>
    )
  }
}

export default Clock;
