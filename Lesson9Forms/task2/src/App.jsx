import React from 'react';

import UserForm from './UserForm';

const App = () => {
  const createUser = obj => {
    console.log(obj);
  };

  return <UserForm onSubmit={createUser} />;
};
export default App;
