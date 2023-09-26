import React from "react";

const Basket = ({ items }) => {
  return (
    <div>
      <h2>Basket</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Basket;
