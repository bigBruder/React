import React, { Component } from 'react';
import Expand from './Expand';

class App extends Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
      });
    } else
      this.setState({
        isOpen: true,
      });
  };

  render() {
    return (
      <div className="app">
        <Expand isOpen={this.state.isOpen} onClick={this.handleClick} title="Some title">
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
