import React from "react";
import { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";

export default function Comment() {
  const { username, isAdmin } = React.useContext(UserInfoContext);

  return (
    <div>
      <p>Comment: {username} </p>
      {isAdmin && <button>Edit</button>}
    </div>
  );
}
