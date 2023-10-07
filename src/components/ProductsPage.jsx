// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts, addToCart } from './productsSlice';
// import './App.css';

// function ProductsPage() {
//     const dispatch = useDispatch();
//     const products = useSelector(state => state.products.products);
//     const cartItems = useSelector(state => state.products.cartItems);
//     const productsStatus = useSelector(state => state.products.status);
//     const productsError = useSelector(state => state.products.error);

//     const [selectedCategory, setSelectedCategory] = useState('Все');
//     const exchangeRate = 88.7;

//     const categoriesMap = {
//         'Все': 'all',
//         'Смартфоны': 'smartphones',
//         'Ноутбуки': 'laptops',
//         'Духи': 'fragrances',
//         'Уход за кожей': 'skincare',
//         'Продукты': 'groceries',
//         'Домашнее украшение': 'home-decoration',
//         'Мебель': 'furniture',
//         'Женские блузы': 'tops',
//         'Женские платья': 'womens-dresses',
//         'Женская обувь': 'womens-shoes'
//     };

//     useEffect(() => {
//         if (productsStatus === 'idle') {
//             dispatch(fetchProducts());
//         }
//     }, [productsStatus, dispatch]);

//     const handleAddToCart = (product) => {
//         dispatch(addToCart(product.id));  // Теперь мы используем действие Redux для добавления товара в корзину
//     };

//     const filteredProducts = selectedCategory === 'Все' ? products : products.filter(product => product.category === categoriesMap[selectedCategory]);

//     return (
//         <div>
//             <nav>
//                 <div>
//                     <Link to="/cart">
//                         Корзина ({cartItems.length})  // Теперь мы используем cartItems из Redux
//                     </Link>
//                 </div>
//             </nav>

//             {productsStatus === 'loading' && <p>Загрузка продуктов...</p>}
//             {productsStatus === 'failed' && <p>Ошибка: {productsError}</p>}

//             <div className="filter">
//                 {Object.keys(categoriesMap).map(category => (
//                     <button 
//                         key={category}
//                         className={selectedCategory === category ? 'active' : ''}
//                         onClick={() => setSelectedCategory(category)}>
//                         {category}
//                     </button>
//                 ))}
//             </div>

//             <div className="products">
//                 {filteredProducts.map(product => (
//                     <div key={product.id} className="product-card">
//                         <img src={product.thumbnail} alt={product.title} />
//                         <h2>{product.title}</h2>
//                         <p>${product.price} (~{Math.round(product.price * exchangeRate)} сом)</p>
//                         <button onClick={() => handleAddToCart(product)}>Добавить в корзину</button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ProductsPage;






import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart } from './productsSlice';
import './App.css';

function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const cartItems = useSelector(state => state.products.cartItems);
  const productsStatus = useSelector(state => state.products.status);
  const productsError = useSelector(state => state.products.error);

  useEffect(() => {
    if (productsStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productsStatus, dispatch]);

  return (
    <div>
      <h1>Товары</h1>
      <p>Корзина: {cartItems.length}</p>
      {productsStatus === 'loading' && <p>Загрузка...</p>}
      {productsStatus === 'failed' && <p>Ошибка: {productsError}</p>}
      <ul className="products">
        {products.map(product => (
          <li key={product._id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div>{product.name} - ${product.price}</div>
            <button className="smallButton" onClick={() => dispatch(addToCart(product._id))}>Добавить в корзину</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;


