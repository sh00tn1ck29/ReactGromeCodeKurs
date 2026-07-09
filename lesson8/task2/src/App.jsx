import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  toggleVisibility = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>Toggle</button>
        {this.state.visible && (
          <div>
            <Clock location="London" offset={0} />
            <Clock location="Kyiv" offset={2} />
            <Clock location="New York" offset={-5} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
