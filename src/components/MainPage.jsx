import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [newPost, setNewPost] = useState("");

  const handleInputChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://dummyjson.com/posts/add", {
        title: newPost,
      });

      // Перенаправляем пользователя на страницу постов
      navigate("./postsPage");
    } catch (error) {
      console.error("Ошибка при отправке запроса", error);
    }
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
