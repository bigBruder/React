import React from 'react';

const Login = props => {
  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  <button onClick={props.handleLogin}>Login</button>;
};
export default Login;
