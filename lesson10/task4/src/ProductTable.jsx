import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  const rows = [];

  let lastCategory = null;

  products.forEach(product => {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);

      lastCategory = product.category;
    }

    rows.push(<ProductRow product={product} key={product.name} />);
  });

  return (
    <div>
      <div style={{ display: 'flex', gap: '20px', fontWeight: 'bold' }}>
        <span>Name</span>
        <span>Price</span>
      </div>

      <div>{rows}</div>
    </div>
  );
};

export default ProductTable;
