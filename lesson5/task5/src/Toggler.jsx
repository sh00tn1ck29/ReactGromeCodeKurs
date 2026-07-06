import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      condition: 'off',
    };
  }

  togglerFunc() {
    if (this.state.condition === 'off') {
      this.setState({
        condition: 'on',
      });
    } else {
      this.setState({
        condition: 'off',
      });
    }
  }

  render() {
    return (
      <div className="toggler" onClick={() => this.togglerFunc()}>
        {this.state.condition}
      </div>
    );
  }
}

export default Toggler;
