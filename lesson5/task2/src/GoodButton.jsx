import React, { Component } from 'react';

class GoodButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    return alert(event.target.textContent);
  }

  render() {
    return (
      <button className="fancy-button" onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
