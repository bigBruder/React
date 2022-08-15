import React, { Component } from 'react';
import './index.scss';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Off',
    };
  }
  handleClick = () => {
    this.setState({
      status: this.state.status === 'Off' ? 'On' : 'Off',
    });
  };
  render() {
    return (
      <div onClick={this.handleClick} className="toggler">
        {this.state.status}
      </div>
    );
  }
}

export default Toggler;
