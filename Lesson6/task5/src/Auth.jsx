import React, { Component } from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';
import './index.scss';

const spinnerSize = '10px';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.state = {
      isSpinnerTime: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isSpinnerTime: true,
    });

    setTimeout(() => {
      this.setState({
        isSpinnerTime: false,
        isLoggedIn: true,
      });
    }, 2000);
    // this.setState({
    //   isLoggedIn: true,
    // });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (this.state.isSpinnerTime) {
      return <Spinner size="100px" />;
    }
    return this.state.isLoggedIn ? (
      <Logout onLogout={this.handleLogout} />
    ) : (
      <Login onLogin={this.handleLogin} />
    );
  }
}

export default Auth;
