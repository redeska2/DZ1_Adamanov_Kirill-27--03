import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartPage() {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((sum, product) => sum + parseInt(product.price.replace('$', '')), 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map((product, index) => (
        <div key={index}>
          <p>{product.name} - {product.price}</p>
        </div>
      ))}
      <p>Total: ${total}</p>
      <Link to="/products">Continue Shopping</Link>
    </div>
  );
}

export default CartPage;
