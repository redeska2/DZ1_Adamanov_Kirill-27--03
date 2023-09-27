import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/App.css'

function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/posts?userId=$%7BuserId%7D ')
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.error('Ошибка при получении постов:', error);
      });
  }, []);


  const Footer = () => {
    return (
      <footer>
        <p>Это мой футер.</p>
      </footer>
    );
  };

  return (
    <div>
      <h1>Страница постов</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <div className="footer"></div>
      <Footer />
    </div>
  );
}

export default PostsPage;