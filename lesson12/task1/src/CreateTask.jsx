import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleCreate = () => {
    const { inputValue } = this.state;
    if (inputValue.trim()) {
      this.props.onCreate(inputValue.trim());
      this.setState({ inputValue: '' });
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
          placeholder="New task..."
        />
        <button className="btn" onClick={this.handleCreate}>
          Create
        </button>
      </div>
    );
  }
}

CreateTask.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default CreateTask;
