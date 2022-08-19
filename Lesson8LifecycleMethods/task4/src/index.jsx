import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import User from './User';

const rootElement = document.querySelector('#root');

// const userInfo = {
//   name: 'Tom',
//   avatarUrl: 'https://avatars3.githubusercontent.com/u/69631?v=4',
// };

ReactDOM.render(<User userId="facebook" />, rootElement);
