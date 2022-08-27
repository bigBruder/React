import React, { Component } from 'react';

class Expand extends Component {
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
    let toggle;
    if (this.state.isOpen) {
      toggle = 'fas fa-chevron-up';
    } else {
      toggle = 'fas fa-chevron-down';
    }
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.handleClick}>
            <i className={toggle}></i>
          </button>
        </div>
        {this.state.isOpen ? (
          <div className="expand__content">{this.props.children}</div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
export default Expand;
