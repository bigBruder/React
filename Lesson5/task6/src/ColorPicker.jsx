import React, { Component } from 'react';
import './index.scss';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }
  setTitleColor = color => {
    this.setState({
      color: color,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            onMouseEnter={() => this.setTitleColor('Coral')}
            onMouseLeave={() => this.setTitleColor('')}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseEnter={() => this.setTitleColor('Aqua')}
            onMouseLeave={() => this.setTitleColor('')}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseEnter={() => this.setTitleColor('Bisque')}
            onMouseLeave={() => this.setTitleColor('')}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
