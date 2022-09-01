import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [state, setStatus] = useState({ status: 'online' });

  useEffect(() => {
    const onOffline = () => {
      setStatus({
        status: 'offline',
      });
    };

    const onOnline = () => {
      setStatus({
        status: 'online',
      });
    };

    window.addEventListener('offline', onOffline);
    window.addEventListener('online', onOnline);

    return () => {
      window.removeEventListener('offline', onOffline);
      window.removeEventListener('online', onOnline);
    };
  }, []);

  // componentDidMount() {
  //   window.addEventListener('offline', this.onOffline);
  //   window.addEventListener('online', this.onOnline);
  // }

  // componentWillUnmount() {
  //   window.addEventListener('offline', this.onOffline);
  //   window.addEventListener('online', this.onOnline);
  // }

  // onOffline = () => {
  //   this.setState({
  //     status: 'offline',
  //   });
  // };

  // onOnline = () => {
  //   this.setState({
  //     status: 'online',
  //   });
  // };
  const { status } = state;

  let className = 'status';
  if (status === 'offline') {
    className += ' status_offline';
  }

  return <div className={className}>{status}</div>;
};
export default ConnectionStatus;
