import React, { useState } from "react";
import "./App.css";
import UserForm from "./form";
import UserName from "./UserName";

function App() {
  const [showForm, setShowForm] = useState(false);
  // const [hideForm, setHideForm] = useState(true);

  const getActiveForm = ({ active }) => setShowForm(true);
  // const getDisabledForm = ({ disable }) => setHideForm(false);

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
        {showForm ? (
          <UserForm
            setNames={setNames}
            names={names}
            // disable={getDisabledForm}
          />
        ) : null}
        <button onClick={getActiveForm}>add new user</button>
      </div>
    </div>
  );
}

export default App;
