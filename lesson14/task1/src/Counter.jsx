import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    setCounter(counter - 1);
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>
        -
      </button>
      <span className="counter__value" onClick={reset}>
        {counter}
      </span>
      <button className="counter__button" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
