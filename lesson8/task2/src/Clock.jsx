import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { location, offset } = this.props;

    const date = new Date(this.state.time);

    date.setHours(date.getHours() + offset + date.getTimezoneOffset() / 60);

    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    return (
      <div className="clock">
        <div className="clock__location">{location}</div>
        <div className="clock__time">{formattedTime}</div>
      </div>
    );
  }
}

export default Clock;
