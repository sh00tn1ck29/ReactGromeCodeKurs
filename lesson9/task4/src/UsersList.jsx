import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    filterText: '',
  };

  handleInputChange = event => {
    this.setState({
      filterText: event.target.value,
    });
  };

  render() {
    const { users } = this.props;
    const { filterText } = this.state;

    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(filterText.toLowerCase()),
    );

    return (
      <div>
        <Filter
          filterText={filterText}
          count={filteredUsers.length}
          onChange={this.handleInputChange}
        />
        <ul className="users">
          {filteredUsers.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
