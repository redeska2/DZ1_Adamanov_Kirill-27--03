import React, { useState } from 'react';
import '../components/App.css'
import products from './shop.json'; // Импортируйте ваш JSON-файл

function ProductsPage() {
    const [cartCount, setCartCount] = useState(0);
  
    const handleAddToCart = () => {
      setCartCount(cartCount + 1);
    };
  
    return (
      <div>
        <nav>
          <div>Navbar</div>
          <div>Корзина: {cartCount}</div>
        </nav>
        <div className="products">
          {products.map(product => (
            <div key={product._id} className="product-card">
              {/* Изображение товара удалено */}
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <button onClick={handleAddToCart}>Купить</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ProductsPage;
