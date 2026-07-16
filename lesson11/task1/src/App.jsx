import React, { Component } from 'react';
import Numbers from './Numbers';
import EvenNumbers from './EvenNumbers';
import OddNumbers from './OddNumbers';

class App extends Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState(prevState => ({
        number: prevState.number + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { number } = this.state;

    return (
      <div className="app">
        <OddNumbers number={number} />
        <EvenNumbers number={number} />
        <Numbers title="All numbers" number={number} />
        <Numbers title="Just 17" number={17} />
      </div>
    );
  }
}

export default App;
