import React from 'react';

import UserForm from './UserForm';

const App = () => {
  const createUser = event => {
    const formData = [...new FormData(this.formRef)].reduce(
      (acc, [name, value]) => ({ ...acc, [name]: value }),
      {},
    );
    console.log(formData);
  };

  return <UserForm onSubmit={createUser} />;
};
export default App;
