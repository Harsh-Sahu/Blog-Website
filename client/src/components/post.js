import React, { useState } from "react";
import axios from "axios";

function Post(props) {
  const [blog, setblog] = useState([]);

  const id = props.match.params.postTitle;
  axios
    .get("http://localhost:7000/post/" + id)
    .then((response) => {
      setblog(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="post">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}

export default Post;
