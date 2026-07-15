import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends Component {
  state = {
    cartItems: [
      { id: '1', name: 'iPhone 11', price: 999 },
      { id: '2', name: 'iPad Pro', price: 799 },
    ],
  };

  render() {
    const { userName } = this.props;
    const { cartItems } = this.state;

    return (
      <div className="column">
        <CartTitle count={cartItems.length} userName={userName} />
        <ProductsList cartItems={cartItems} />
      </div>
    );
  }
}

export default ShoppingCart;
