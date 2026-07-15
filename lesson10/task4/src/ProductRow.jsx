import React from 'react';

const ProductRow = ({ product }) => {
  const name = product.stocked ? (
    <span>{product.name}</span>
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  );
  return (
    <div>
      {name} {product.price}
    </div>
  );
};

export default ProductRow;
