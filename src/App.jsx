import { Routes, Route, Link, useLocation } from 'react-router-dom';
import MainPage from './components/MainPage';
import PostsPage from './components/PostsPage';
import UsersPage from './components/UsersPage'; 
import UserProfilePage from './components/UserProfilePage';
import ProductsPage from './components/ProductsPage'; 
import CartPage from './components/CartPage'; 
import CreatePostPage from './DZ7/CreatePostPage';  // <-- Импорт страницы создания поста
import './index.css'; 
import PostsPageDZ7 from './DZ7/PostsPageDZ7';
import { CartProvider } from './components/CartContext';

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
          <li><Link to="/create-post">Create Post</Link></li>  
          <li><Link to="/posts">Posts PageDZ7</Link></li>

        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/user/:userId" element={<UserProfilePage />} />
        <Route path="/products" element={<ProductsPage />} /> 
        <Route path="/cart" element={<CartPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/posts" element={<PostsPageDZ7 />} />

      </Routes>
      
      <div className="footer">
        ...
      </div>
    </>
  );
}

export default App;
