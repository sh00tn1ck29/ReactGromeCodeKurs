import React from 'react';

const ProductCategoryRow = ({ category }) => {
  return (
    <div style={{ fontWeight: 'bold', marginTop: '12px', marginBottom: '4px', color: '#555' }}>
      {category}
    </div>
  );
};

export default ProductCategoryRow;
