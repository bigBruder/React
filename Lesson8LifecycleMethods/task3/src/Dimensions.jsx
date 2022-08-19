import React, { Component } from 'react';

class Dimensions extends Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);

    const { innerWidth, innerHeigth } = window;
    this.setDimensions(innerWidth, innerHeigth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps, nextState);
  //   console.log('shouldComponentUpdate(nextProps, nextState):decide to render or not to render');
  //   return nextProps;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps);
  //   console.log('componentDidUpdate(prevProps, prevState):some updates based on new props');
  // }

  render() {
    return <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>;
  }
}

export default Dimensions;
