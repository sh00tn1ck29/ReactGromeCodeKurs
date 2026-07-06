import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      condition: 'Off',
    };
  }

  togglerFunc() {
    if (this.state.condition === 'Off') {
      this.setState({
        condition: 'On',
      });
    } else {
      this.setState({
        condition: 'Off',
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
