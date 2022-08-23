import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('offline', this.onOffline);
    window.addEventListener('online', this.onOnline);
  }

  componentWillUnmount() {
    window.addEventListener('offline', this.onOffline);
    window.addEventListener('online', this.onOnline);
  }

  onOffline = () => {
    this.setState({
      status: 'offline',
    });
  };

  onOnline = () => {
    this.setState({
      status: 'online',
    });
  };
  render() {
    let status = 'status';
    if (this.state.status === 'offline') {
      status += ' status_offline';
    }

    return <div className={status}>{this.state.status}</div>;
  }
}
export default ConnectionStatus;
