import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button className="btn" onClick={() => setVisible(!visible)}>
        Toggle
      </button>
      {visible && (
        <div className="clocks">
          <Clock location="London" offset={0} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="New York" offset={-5} />
        </div>
      )}
    </div>
  );
};

export default App;
