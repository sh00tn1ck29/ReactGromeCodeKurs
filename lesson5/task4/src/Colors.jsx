import React, { Component } from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  constructor(props) {
    super(props);
  }

  setBackground = color => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          style={{ backgroundColor: RED }}
          onClick={() => this.setBackground(RED)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: GREEN }}
          onClick={() => this.setBackground(GREEN)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: BLUE }}
          onClick={() => this.setBackground(BLUE)}
        ></button>
      </div>
    );
  }
}

export default Colors;
