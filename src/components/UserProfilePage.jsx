import  { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function UserProfilePage() {
  const { userId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState("posts");
  const [age, setAge] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const userResponse = await axios.get(`https://dummyjson.com/users/${userId}`);
        setUser(userResponse.data);
        setAge(userResponse.data.age);
        
        const tab = new URLSearchParams(location.search).get("tab");
        
        if (tab === "todos") {
          const todosResponse = await axios.get(`https://dummyjson.com/users/${userId}/todos`);
          setTodos(todosResponse.data.todos);
          setActiveTab("todos");
        } else {
          const postsResponse = await axios.get(`https://dummyjson.com/users/${userId}/posts`);
          setPosts(postsResponse.data.posts);
          setActiveTab("posts");
        }
      } catch (error) {
        if (error.response && error.response.status === 429) {
          console.error("Слишком много запросов, попробуйте позже.");
          setError("Слишком много запросов, попробуйте позже.");
          setTimeout(fetchData, 10000); 
        } else {
          console.error("Ошибка при получении данных:", error);
          setPosts([]);
          setTodos([]);
          setError("Ошибка при загрузке данных");
        }
      }
    }

    fetchData();
  }, [userId, location.search]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/user/${userId}?tab=${tab}`);
  };
  
  return (
    <div>
      <h1>Профиль пользователя</h1>
      <h2>{user.firstName} {user.lastName}</h2>
      {age && <p>Возраст: {age}</p>}
      {error && <p>{error}</p>}
      <button onClick={() => handleTabChange("posts")}>Посты</button>
      <button onClick={() => handleTabChange("todos")}>Список дел</button>
      {activeTab === "todos" && (
        <div>
          {todos.length === 0 ? (
            <p>Список дел пуст</p>
          ) : (
            <div>
              <h3>Список дел пользователя:</h3>
              <ul>
                {todos.map((todo) => (
                  <li key={todo.id}>{todo.todo}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      {activeTab === "posts" && (
        <div>
          {posts.length === 0 ? (
            <p>Посты пользователя отсутствуют</p>
          ) : (
            <div>
              <h3>Посты пользователя:</h3>
              {posts.map((post) => (
                <div key={post.id}>
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UserProfilePage;
