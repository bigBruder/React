import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: null,
  };

  componentDidMount() {
    window.addEventListener('offline', this.onOffline);
    window.addEventListener('ononline', this.onOnline);

    const { online, offline } = window;
    this.setStatus(online, offline);
  }

  componentWillUnmount() {
    window.addEventListener('offline', this.onOffline);
    window.addEventListener('ononline', this.onOnline);
  }

  onResize = e => {
    const { online, offline } = e.target;
    this.setStatus(online, offline);
  };

  setStatus = (online, offline) => {
    if (this.state.status === 'online') {
      this.setState({
        status: offline,
      });
    }
    this.setState({
      status: online,
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
