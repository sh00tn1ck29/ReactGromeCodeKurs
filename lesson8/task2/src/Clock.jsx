import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: this.getLocalDate(this.props.offset),
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: this.getLocalDate(this.props.offset),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getLocalDate(offset) {
    const d = new Date();
    const utc = d.getTime() + d.getTimezoneOffset() * 60000;
    return new Date(utc + 3600000 * offset);
  }

  render() {
    const { location } = this.props;
    const formattedTime = this.state.time.toLocaleTimeString('en-US');
    return (
      <div className="clock">
        <div className="clock__location">{location}</div>
        <div className="clock__time">{formattedTime}</div>
      </div>
    );
  }
}

export default Clock;
