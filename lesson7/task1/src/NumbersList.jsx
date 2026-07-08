import React from 'react';

const NumbersList = ({ list }) => {
  const listElems = list.map(num => {
    return <li>{num}</li>;
  });
  return <ul>{listElems}</ul>;
};

export default NumbersList;
