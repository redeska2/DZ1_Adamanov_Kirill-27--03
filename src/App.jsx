// App.jsx

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/MainPage';
import PostsPage from './components/PostsPage';
import UsersPage from './components/UsersPage';
import UserProfilePage from './components/UserProfilePage';
import Shop from './components/Shop'; // Импортируйте Shop

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/user/:userId" element={<UserProfilePage />} />
        <Route path="/shop" element={<Shop />} /> {/* Добавьте ссылку на Shop */}
      </Routes>

      <ul>
        <li>
          <Link to="/">Main Page</Link>
        </li>
        <li>
          <Link to="/posts">Posts Page</Link>
        </li>
        <li>
          <Link to="/users">Users Page</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link> {/* Добавьте ссылку на Shop */}
        </li>
      </ul>
    </>
  );
}

export default App;
