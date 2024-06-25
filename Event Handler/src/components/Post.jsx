import React from "react";
import "./post.css";

const Post = ({ id, title, body }) => {
  return (
    <div className="post">
      <span> ID : {id}</span>
      <h1>{title}</h1>
      <h3>{body}</h3>
    </div>
  );
};

export default Post;
