import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import Greeting from './Greeting';


// const birthDate = {birthDate:new Date('2001-01-01T11:11:11.819z')};

const rootElement = document.querySelector("#root");

ReactDOM.render(<Greeting firstName="John" lastName="Doe" birthDate={21}/>, rootElement);
