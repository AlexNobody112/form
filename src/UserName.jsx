import React from "react";

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

export default UserName;
