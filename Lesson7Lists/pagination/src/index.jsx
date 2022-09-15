import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList';
import './index.scss';

const users = [
  {
    name: 'Bob',
    age: '21',
    id: '1',
  },
  {
    name: 'Tom',
    age: '17',
    id: '2',
  },
  {
    name: 'Tad',
    age: '18',
    id: '3',
  },
  {
    name: 'John',
    age: '18',
    id: '4',
  },
  {
    name: 'Alex',
    age: '19',
    id: '5',
  },
  {
    name: 'Andrew',
    age: '17',
    id: '6',
  },
  {
    name: 'Nadya',
    age: '20',
    id: '7',
  },
  {
    name: 'Den',
    age: '17',
    id: '8',
  },
];
const rootElem = document.querySelector('#root');
ReactDOM.render(<UsersList users={users} />, rootElem);
