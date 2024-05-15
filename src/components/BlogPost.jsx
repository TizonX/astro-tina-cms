// src/components/BlogPost.jsx
import React from "react";
import { useTina } from "tinacms/dist/react";

const SingleBlog = (props) => {
  const response = useTina(props);
  console.log("response : ", props);
  return (
    <div>
      <h1>Testing</h1>
    </div>
  );
};

export default SingleBlog;
