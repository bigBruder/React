import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import "./search.scss";
import Greeting from './Greeting';

// const birthDate = `${newDate('2001-01-01T11:11:11.819z')}`;

const rootElement = document.querySelector("#root");

ReactDOM.render(<Greeting firstName="John" lastName="Doe" birthDate={17}/>, rootElement);
