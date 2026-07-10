import React from 'react';
import UserForm from './UserForm';

const App = () => {
  const createUser = userData => {
    console.log(userData);
  };

  return <UserForm onSubmit={createUser} />;
};

export default App;
