import React, { useState } from 'react';
import Info from './Info';

const Page = () => {
  const [productInfo, setProductInfo] = useState('');

  return (
    <div className="page">
      <div className="text">
        <Info info={productInfo} />
      </div>
      <div className="actions">
        <button
          className="btn"
          onClick={() => setProductInfo('Price is 500$. Available in 2 colors')}
        >
          IPhone 13
        </button>
        <button className="btn" onClick={() => setProductInfo('Price is 650$. Not available')}>
          IPhone 13 Pro
        </button>
        <button className="btn" onClick={() => setProductInfo('')}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Page;
