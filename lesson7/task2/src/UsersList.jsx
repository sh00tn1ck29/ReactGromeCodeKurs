import React, { Component } from 'react';
import User from './User';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sorting: null,
    };
  }

  toggleSorting = () => {
    const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';

    this.setState({
      sorting: newSorting,
    });
  };

  render() {
    let sortedUsers = [...this.props.users];

    if (this.state.sorting === 'asc') {
      sortedUsers.sort((a, b) => a.age - b.age);
    } else if (this.state.sorting === 'desc') {
      sortedUsers.sort((a, b) => b.age - a.age);
    }

    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || '-'}
        </button>
        <ul className="users">
          {sortedUsers.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
