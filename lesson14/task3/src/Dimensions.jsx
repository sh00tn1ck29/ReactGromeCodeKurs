import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const onResize = e => {
      const { innerWidth, innerHeight } = e.target;
      setDimensions({
        width: innerWidth,
        height: innerHeight,
      });
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const { width, height } = dimensions;

  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
