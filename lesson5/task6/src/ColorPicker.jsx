import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
    };
  }

  clearFunc() {
    this.setState({
      color: '',
    });
  }

  colorFunc = name => {
    this.setState({
      color: name,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.colorFunc('Coral')}
            onMouseLeave={() => this.clearFunc()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.colorFunc('Aqua')}
            onMouseLeave={() => this.clearFunc()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.colorFunc('Bisque')}
            onMouseLeave={() => this.clearFunc()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
