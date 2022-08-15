import React, { useState } from "react";
import "./App.css";
import UserForm from "./form";

const UserName = ({ user, index, removeUser }) => {
  return (
    <div style={{ display: "flex" }}>
      <h1 className="app-item">{user.sirName}</h1>
      <h1 className="app-item">{user.name}</h1>
      <h1 className="app-item">{user.patronymic}</h1>
      <button onClick={() => removeUser(index)} className="app-item-delete">
        x
      </button>
    </div>
  );
};

function App() {
  const removeUser = (index) => {
    const newUser = [...names];
    newUser.splice(index, 1);
    setNames(newUser);
    console.log("удалено");
  };

  const [names, setNames] = useState([
    {
      sirName: "Иванов",
      name: "Иван",
      patronymic: "Иванович",
    },
  ]);

  return (
    <div className="App">
      <div>
        {" "}
        {names.map((user, index) => (
          <UserName
            key={index}
            index={index}
            user={user}
            removeUser={removeUser}
          />
        ))}
        <UserForm setNames={setNames} names={names} />
      </div>
    </div>
  );
}

export default App;
