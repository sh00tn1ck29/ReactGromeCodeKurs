import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isLoading: false,
    };
  }

  handleLogin = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    if (this.state.isLoading) {
      return <Spinner size={32} />;
    }

    if (this.state.isLoggedIn) {
      return <Logout onLogout={this.handleLogout} />;
    }

    return <Login onLogin={this.handleLogin} />;
  }
}

export default Auth;
