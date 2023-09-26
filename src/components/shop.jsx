// src/components/Shop.jsx
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { product } from "./product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();

      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Магазин</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
