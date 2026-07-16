import React, { Component } from 'react';

class EvenNumbers extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.number % 2 === 0;
  }

  render() {
    const { number } = this.props;
    return (
      <div className="number">
        <span className="number__title">Even number</span>
        <span className="number__value">{number}</span>
      </div>
    );
  }
}

export default EvenNumbers;
