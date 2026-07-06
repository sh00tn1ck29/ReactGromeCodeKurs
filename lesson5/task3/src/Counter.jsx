import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  decrement(event) {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  increment(event) {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  clearCounter() {
    this.setState({
      counter: 0,
    });
  }

  render() {
    return (
      <div className="counter">
        <button data-action="decrease" className="counter__button" onClick={() => this.decrement()}>
          -
        </button>
        <span
          className="counter__value"
          onClick={() => {
            this.clearCounter();
          }}
        >
          {this.state.counter}
        </span>
        <button data-action="increase" className="counter__button" onClick={() => this.increment()}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
