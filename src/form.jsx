import React, { useState } from "react";

const UserForm = ({setNames, names}) => {
  const [sirName, setSirName] = useState("");
  const [name, setName] = useState("");
  const [patronymic, setPatronymic] = useState("");

  const addNewUser = (e) => {
    e.preventDefault();

    const addedUser = {
      sirName,
      name,
      patronymic,
    };

    console.log(addedUser);

    setNames([...names, addedUser]);

    setSirName("");
    setName("");
    setPatronymic("");
  };

  return (
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
  );
};

export default UserForm;
