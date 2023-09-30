import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; 
import '../components/App.css';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const exchangeRate = 88.7;
  const { cart, dispatch } = useCart();

  const categoriesMap = {
    'Все': 'all',
    'Смартфоны ': 'smartphones',
    'Ноутбуки ': 'laptops',
    'Духи ': 'fragrances',
    'Уход за кожей ': 'skincare',
    'Продукты ': 'groceries',
    'Домашнее украшение ': 'home-decoration',
    'Мебель ': 'furniture',
    'Женские блузы ': 'tops',
    'Женские платья ': 'womens-dresses',
    'Женская обувь': 'womens-shoes'
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products?limit=100');
        const fetchedProducts = response.data.products;
        setProducts(fetchedProducts);
        const mappedSelectedCategory = categoriesMap[selectedCategory];
        setFilteredProducts(    
          mappedSelectedCategory === 'all'
            ? fetchedProducts
            : fetchedProducts.filter((product) => product.category === mappedSelectedCategory)
        );
        setLoading(false);
      } catch (err) {
        setError('Не удалось загрузить продукты.');
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, [selectedCategory]);

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div>
      <nav>
        <div>
          <Link to="/cart">
            <img src="https://png.pngtree.com/png-vector/20190330/ourmid/pngtree-vector-shopping-cart-icon-png-image_889941.jpg" alt="Корзина" width="20" height="20" />
          </Link>: {cart.length}
        </div>
      </nav>

      {loading && <p>Загрузка продуктов...</p>}
      {error && <p>{error}</p>}

      <div className="filter">
    {Object.keys(categoriesMap).map(category => (
        <button 
            key={category} 
            onClick={() => setSelectedCategory(category)}
            className="smallButton" 
        >
            {category}
        </button>
    ))}
</div>
      
      <div className="products">
        {!loading && !error && filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price} (~{Math.round(product.price * exchangeRate)} сом)</p>
            <button onClick={() => handleAddToCart(product)}>Купить</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
