
import  { useEffect, useState } from 'react';
import axios from 'axios';

function PostsPageDZ7() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('https://dummyjson.com/posts?limit=15');
        setPosts(response.data.posts); 
      } catch (error) {
        console.error('Ошибка при загрузке постов:', error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Список постов</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>  
            <small>Автор ID: {post.userId}</small>
            <ul>
              {post.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
            <p>Реакции: {post.reactions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsPageDZ7;
