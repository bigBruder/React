import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: false,
    };
  }

  handleOnline = () => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    return (
      <div className="status">
        {this.state.isOnline ? <Online /> : <Offline onClick={this.handleOnline} />}
      </div>
    );
  }
}

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
