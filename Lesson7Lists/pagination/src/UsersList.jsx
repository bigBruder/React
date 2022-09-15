import React, { useState } from 'react';
import User from './User';
import Pagination from './Pagination';

const UsersList = ({ users }) => {
  const [state, setState] = useState({
    currentPage: 1,
  });

  const { currentPage } = state;

  const goPrev = () => {
    setState({
      currentPage: currentPage - 1,
    });
  };

  const goNext = () => {
    setState({
      currentPage: currentPage + 1,
    });
  };

  const itemsPerPage = 3;

  const toIndex = currentPage * itemsPerPage;
  const fromIndex = toIndex - itemsPerPage;

  const currentUsers = users.slice(fromIndex, toIndex);

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
