import React from 'react';

import UserForm from './UserForm';

const App = state => {
  const createUser = event => {
    event.preventDefault();
    console.log(state);
  };

  return <UserForm onSubmit={createUser} />;
};
export default App;
