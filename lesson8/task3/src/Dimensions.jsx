import React, { Component } from 'react';

class Dimensions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  componentDidMount() {
    document.title = `${this.state.width}px - ${this.state.height}px`;
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { innerWidth, innerHeight } = window;
    this.setState({
      width: innerWidth,
      height: innerHeight,
    });
    document.title = `${innerWidth}px - ${innerHeight}px`;
  };

  render() {
    const { width, height } = this.state;
    return (
      <div className="dimensions">
        {width}px - {height}px
      </div>
    );
  }
}

export default Dimensions;
