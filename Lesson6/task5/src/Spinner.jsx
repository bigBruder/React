import React from 'react';
import './index.scss';

const Spinner = props => (
  <span style={{ width: props.size, height: props.size }} className="spinner"></span>
);

export default Spinner;
