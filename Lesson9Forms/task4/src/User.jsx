import React from 'react';

// import UserList from './UserList';

const User = ({ name, age }) => (
  <ul className="users">
    <li className="user">
      <span className="user__name">{name}</span>
      <span className="user__age">{age}</span>
    </li>
    <li className="user">
      <span className="user__name">{name}</span>
      <span className="user__age">{age}</span>
    </li>
  </ul>
);

export default User;
