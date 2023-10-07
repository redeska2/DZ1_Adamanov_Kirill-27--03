import  { useState, useNavigate } from 'react';
import fetch from 'axios';
import './App.css';

function CreatePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState(0);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUserIdChange = (e) => {
    setUserId(Number(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          userId,
          
        }),
      });

      if (response.ok) {
        
        navigate('/posts');
      } else {
        console.error('Ошибка при создании поста');
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса', error);
    }
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>User ID:</label>
          <input type="number" value={userId} onChange={handleUserIdChange} />
        </div>
       
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;