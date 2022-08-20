import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('offline', this.onOffline);
    window.addEventListener('online', this.onOnline);
    this.onOffline(event);
    this.onOnline(event);
  }

  componentWillUnmount() {
    window.addEventListener('offline', this.onOffline);
    window.addEventListener('online', this.onOnline);
    this.onOffline(event);
    this.onOnline(event);
  }

  onOffline = event => {
    event.target.navigator.online
      ? this.setState({
          status: 'online',
        })
      : this.setState({
          status: 'offline',
        });
  };

  onOnline = event => {
    event.target.navigator.online
      ? this.setState({
          status: 'online',
        })
      : this.setState({
          status: 'offline',
        });
  };

  render() {
    if (this.state.status === 'online') {
      return <div class="status ">online</div>;
    }
    return <div class="status status_offline">offline</div>;
  }
}
export default ConnectionStatus;
