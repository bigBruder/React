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
      color: (document.querySelector('.picker__title').textContent = color),
    });
  };
  resetTitleColor = () => {
    this.setState({
      color: (document.querySelector('.picker__title').textContent = ''),
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title"></div>
        <div>
          <button
            onMouseEnter={() => this.setTitleColor('Coral')}
            onMouseLeave={() => this.resetTitleColor()}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseEnter={() => this.setTitleColor('Aqua')}
            onMouseLeave={() => this.resetTitleColor()}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseEnter={() => this.setTitleColor('Bisque')}
            onMouseLeave={() => this.resetTitleColor()}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
