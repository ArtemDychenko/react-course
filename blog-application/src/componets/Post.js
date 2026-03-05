import React from "react";
import { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";
import Comment from "./Comment";

export default function Post({ post }) {
  const { isAdmin } = React.useContext(UserInfoContext);

  return (
    <div>
      {isAdmin && <button>Delete</button>}
      <h2>Example Post Title</h2>
      <p>This is an example component post</p>
      <Comment />
    </div>
  );
}
