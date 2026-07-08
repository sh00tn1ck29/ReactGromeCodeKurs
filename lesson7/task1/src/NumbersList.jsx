import React from 'react';

const NumbersList = ({ numbers }) => {
  const listElems = numbers.map(num => {
    return <li>{num}</li>;
  });
  return <ul>{listElems}</ul>;
};

export default NumbersList;
