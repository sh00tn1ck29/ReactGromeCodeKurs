import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: this.getOffsetTime(props.offset),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: this.getOffsetTime(this.props.offset),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getOffsetTime(offset) {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;

    return new Date(utc + offset * 60 * 60 * 1000);
  }

  render() {
    const formattedTime = this.state.time.toLocaleTimeString('en-US', {
      timeZone: 'UTC',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{formattedTime}</div>
      </div>
    );
  }
}

export default Clock;
