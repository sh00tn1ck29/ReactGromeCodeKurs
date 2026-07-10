import React, { Component } from 'react';

class Search extends Component {
  state = {
    value: '',
  };

  handlechange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  handleclick = () => {
    alert(`${this.state.value}`);
  };

  render() {
    return (
      <form className="search" onSubmit={this.handleclick}>
        <input
          onChange={this.handlechange}
          type="text"
          class="search__input"
          value={this.state.value}
        />
        <button className="search__button">Search</button>
      </form>
    );
  }
}

export default Search;
