import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  toggleExpand = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { title, children } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleExpand}>
            <i className={isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
          </button>
        </div>
        {isOpen && <div className="expand__content">{children}</div>}
      </div>
    );
  }
}

export default Expand;
