import React from 'react';

const NumbersList = () => {
  const list = [1, 2, 3, 4, 5];
  const listElems = list.map(num => {
    return <li>{num}</li>;
  });
  return <ul>{listElems}</ul>;
};

export default NumbersList;
