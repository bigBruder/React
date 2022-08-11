import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import "./search.scss";
import Greeting from './Greeting';


const rootElement = document.querySelector("#root");

ReactDOM.render(<Greeting firstName="John" lastName="Doe"/>, rootElement);
