import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.getOffsetTime(this.props.offset),
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
    const date = new Date();
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    return new Date(utc + 3600000 * offset);
  }

  render() {
    const date = this.state.time;
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{formattedTime}</div>
      </div>
    );
  }
}

export default Clock;
