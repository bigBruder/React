import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

const Status = props => {
  return <div className="status">{props.isOnline ? <Online /> : <Offline />}</div>;
};

export default Status;

// {
/* <div className="panel">
<Greeting isLoggedIn={this.state.isLoggedIn} />
{this.state.isLoggedIn ? (
  <Logout onLogout={this.handleLogout} />
) : (
  <Login onLogin={this.handleLogin} />
)}
</div> */
// }

// import React from 'react';
// import './index.scss';
// import Online from './Online';
// import Offline from './Offline';

// const Status = props => {
//   if (props.isOnline) {
//     return <Online />;
//   }

//   return <Offline />;
// };

// export default Status;

// constructor(props) {
//   super(props);
//   this.state = {
//     isOnline: false,
//   };
// }

// handleOnline = () => {
//   this.setState({
//     isOnline: true,
//   });
// };
