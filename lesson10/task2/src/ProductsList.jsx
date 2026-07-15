import React from 'react';

const ProductsList = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="products">
      <ul className="products__list">
        {cartItems.map(item => (
          <li key={item.id} className="products__list-item">
            <span className="products__item-name">{item.name}</span>
            <span className="products__item-price">${item.price}</span>
          </li>
        ))}
      </ul>
      <div className="products__total">Total: ${total}</div>
    </div>
  );
};

export default ProductsList;
