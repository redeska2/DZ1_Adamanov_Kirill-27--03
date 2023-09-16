import React, { useState } from "react";
import './App.css'

function MainPage() {
  const [newPost, setNewPost] = useState(""); 

  
  const handleInputChange = (e) => {
    setNewPost(e.target.value);
  };

  
  const handleCreatePost = () => {

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newPost,
        userId: 5,
       
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 
      });
  };

  return (
    <div>
      <h1>Main Page</h1>
      <input
        type="text"
        placeholder="Введите заголовок поста"
        value={newPost}
        onChange={handleInputChange}
      />
      <button onClick={handleCreatePost}>Создать пост</button>
      
    </div>
  );
}

export default MainPage;
