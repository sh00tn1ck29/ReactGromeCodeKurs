import React, { Component } from 'react';

class Numbers extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.number !== this.props.number || nextProps.title !== this.props.title;
  }

  render() {
    const { title, number } = this.props;
    return (
      <div className="number">
        <span className="number__title">{title}</span>
        <span className="number__value">{number}</span>
      </div>
    );
  }
}

export default Numbers;
