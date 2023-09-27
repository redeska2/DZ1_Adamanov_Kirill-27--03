import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/MainPage';
import PostsPage from './components/PostsPage';
import UsersPage from './components/UsersPage'; 
import UserProfilePage from './components/UserProfilePage';
import ProductsPage from './components/ProductsPage'; 

function App() {
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
      </Routes>
    </>
  );
}

export default App;
