import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/MainPage';
import PostsPage from './components/PostsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
      <ul>
        <li>
          <Link to="/">Main Page</Link>
        </li>
        <li>
          <Link to="/posts">Posts Page</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
