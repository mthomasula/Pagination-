import React from "react";

export const Post = ({ title, body }) => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Post;
