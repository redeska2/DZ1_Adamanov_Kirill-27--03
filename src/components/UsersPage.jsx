import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function UsersPage() {
  const [users, setUsers] = useState([]);

  // Получить список пользователей
  const getUsers = async () => {
    const response = await axios.get("https://dummyjson.com/users?limit=100");
    setUsers(response.data.users);
  };

  // Обновить список пользователей
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Страница пользователей</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        {users.map((user) => (
          <div key={user.id} style={{ display: "flex", alignItems: "center", border: "1px solid black", padding: "10px" }}>
            <div style={{ marginRight: "10px" }}>
              <img src={user.image} alt={`${user.firstName} ${user.lastName}`} width="100" height="100" />
            </div>
            <div>
              <p>Имя: {user.firstName}</p>
              <p>Фамилия: {user.lastName}</p>
              <Link to={`/user/${user.id}`}>Перейти к профилю</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersPage;
