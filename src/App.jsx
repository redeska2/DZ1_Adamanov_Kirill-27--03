import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/MainPage';
import PostsPage from './components/PostsPage';
import UsersPage from './components/UsersPage'; // Импортируйте UsersPage
import UserProfilePage from './components/UserProfilePage'; // Импортируйте UserProfilePage

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/users" element={<UsersPage />} /> 
        <Route path="/user/:userId" element={<UserProfilePage />} /> 
      </Routes>

      <ul>
        <li>
          <Link to="/">Main Page</Link>
        </li>
        <li>
          <Link to="/posts">Posts Page</Link>
        </li>
        <li>
          <Link to="/users">Users Page</Link> {/* Добавьте ссылку на Users Page */}
        </li>
      </ul>
    </>
  );
}

export default App;
