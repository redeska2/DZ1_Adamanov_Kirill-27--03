// CreatePost.jsx
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from './postsSlice.jsx';  // Путь до файла postsSlice.js

function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({
      title,
      body
    }));
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
