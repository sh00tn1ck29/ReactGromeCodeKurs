import React from 'react';

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2" style={{ textAlign: 'left', paddingTop: '10px' }}>
        {category}
      </th>
    </tr>
  );
};

export default ProductCategoryRow;
