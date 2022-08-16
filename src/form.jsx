import React, { useState } from "react";

const UserForm = ({ setNames, names }) => {
  const [sirName, setSirName] = useState("");
  const [name, setName] = useState("");
  const [patronymic, setPatronymic] = useState("");

  const [hideForm, setHideForm] = useState(true);
  const getDisabledForm = ({ disable }) => setHideForm(false);

  const addNewUser = (e) => {
    e.preventDefault();

    const addedUser = {
      sirName,
      name,
      patronymic,
    };

    console.log(addedUser);

    addedUser.sirName == "" ||
    addedUser.name == "" ||
    addedUser.patronymic == ""
      ? alert("все поля обязательны для заполнения")
      : setNames([...names, addedUser]);
    console.log(addedUser);

    setSirName("");
    setName("");
    setPatronymic("");
  };

  return (
    <div>
      <form onSubmit={addNewUser}>
        <input
          type="text"
          value={sirName}
          onChange={(e) => setSirName(e.target.value)}
        />

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          value={patronymic}
          onChange={(e) => setPatronymic(e.target.value)}
        />

        <button onClick={addNewUser}>Add new user</button>
      </form>
    </div>
  );
};

export default UserForm;
