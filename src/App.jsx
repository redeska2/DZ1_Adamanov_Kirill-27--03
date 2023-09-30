import { Routes, Route, Link, useLocation } from 'react-router-dom';
import MainPage from './components/MainPage';
import PostsPage from './components/PostsPage';
import UsersPage from './components/UsersPage'; 
import UserProfilePage from './components/UserProfilePage';
import ProductsPage from './components/ProductsPage'; 
import CartPage from './components/CartPage'; 
import './index.css'; 
import { CartProvider } from './components/CartContext'

function App() {
  const location = useLocation();
  const isProductsPage = location.pathname.includes("/products");

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Main Page</Link></li>
          <li><Link to="/posts">Posts Page</Link></li>
          <li><Link to="/users">Users Page</Link></li>
          <li><Link to="/products">Products Page</Link></li> 
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/user/:userId" element={<UserProfilePage />} />
        <Route path="/products" element={<ProductsPage />} /> 
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      
      <div className="footer">
        <ul>
          <li><Link to="/">Main Page</Link></li>
          <li><Link to="/posts">Posts Page</Link></li>
          <li><Link to="/users">Users Page</Link></li>
          <li><Link to="/products">Products Page</Link></li>
          {isProductsPage && <li><Link to="/cart"><img src="https://png.pngtree.com/png-vector/20190330/ourmid/pngtree-vector-shopping-cart-icon-png-image_889941.jpg" alt="Корзина" width="20" height="20" /></Link></li>}
        </ul>
      </div>
    </>
  );
}

export default App;
