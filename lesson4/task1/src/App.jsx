import React, { Component } from 'react';
import './index.scss';
import Counter from './Counter';

const App = () => {
  return (
    <>
      <Counter start={40} interval={100} />
      <Counter start={20} interval={1000} />
    </>
  );
};

export default App;
