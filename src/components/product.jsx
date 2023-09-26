import React from "react";

const product = ({ product }) => {
  return (
    <div key={product.id}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Цена: {product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
};

export default Product;