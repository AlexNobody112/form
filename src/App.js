import React, { useState } from "react";
import "./App.css";

const UserName = ({ user }) => {
  return (
    <div>
      <h1>{user.sirname}</h1>
      <h1>{user.name}</h1>
      <h1>{user.patronymic}</h1>
    </div>
  );
};

function App() {
  const [names, setNames] = useState([
    {
      sirname: "Фамилия",
      name: "Имя",
      patronymic: "Отчество",
      hasForm: false,
    },
    {
      sirname: "Фамилия",
      name: "Имя",
      patronymic: "Отчество",
      hasForm: false,
    },
  ]);

  return (
    <div className="App">
      <div>
        {" "}
        {names.map((index, user) => (
          <UserName key={index} index={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
