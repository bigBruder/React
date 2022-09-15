import React, { useState } from 'react';
import User from './User';
import Pagination from './Pagination';

const UsersList = ({ users }) => {
  const [state, setState] = useState({
    currentPage: 1,
    currentFirstIndex: 0,
    currentSecondIndex: 3,
    currentUsers: users.slice(0, 3),
  });

  const { currentUsers, currentPage, currentFirstIndex, currentSecondIndex } = state;

  const goPrev = () => {
    const a = currentFirstIndex - 3;
    const b = currentSecondIndex - 3;
    setState({
      currentFirstIndex: a,
      currentSecondIndex: b,
      currentUsers: users.slice(a, b),
      currentPage: currentPage - 1,
    });
  };

  const goNext = () => {
    const a = currentFirstIndex + 3;
    const b = currentSecondIndex + 3;
    setState({
      currentFirstIndex: a,
      currentSecondIndex: b,
      currentUsers: users.slice(a, b),
      currentPage: currentPage + 1,
    });
  };

  return (
    <div className="users">
      {
        <Pagination
          goPrev={goPrev}
          goNext={goNext}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
      }
      {currentUsers.map(user => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
};

export default UsersList;
