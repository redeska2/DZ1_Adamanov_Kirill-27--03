import  { useState } from "react";
import { useNavigate,  } from "react-router-dom";
import axios from "axios";

function MainPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleCreatePost = async () => {
    try {
      const response = await axios.post("https://dummyjson.com/products/add", {
        title: title,
        body: body,
      });

      if (response.status === 200) {
        navigate("/posts");
      } else {
        console.error("Ошибка при создании поста");
      }
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
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Введите текст поста"
        value={body}
        onChange={handleBodyChange}
      />
      <button onClick={handleCreatePost}>Создать пост</button>
    </div>
  );
}

export default MainPage;
