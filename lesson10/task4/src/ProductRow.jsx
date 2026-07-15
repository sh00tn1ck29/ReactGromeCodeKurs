import React from 'react';

const ProductRow = ({ product }) => {
  const { name, price, stocked } = product;

  const displayName = stocked ? name : <span style={{ color: 'red' }}>{name}</span>;

  return (
    <tr>
      <td>{displayName}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
