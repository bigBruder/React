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
    if (this.state.status === 'online') {
      return <div class="status ">{this.state.status}</div>;
    }
    return <div class="status status_offline">{this.state.status}</div>;
  }
}
export default ConnectionStatus;
