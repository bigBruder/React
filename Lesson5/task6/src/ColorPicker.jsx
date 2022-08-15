import React, { Component } from 'react';
import './index.scss';

const CORAL = '#FF7F50';
const BISQUE = '#FFE4C4';
const AQUA = '#00FFFF';

class ColorPicker extends Component {
  setTitleColor = color => {
    document.querySelector('.picker__title').textContent = color;
  };
  resetTitleColor = () => {
    document.querySelector('.picker__title').textContent = '';
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
