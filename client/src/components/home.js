import React, { useState } from "react";
import Blogs from "./blogs";
import axios from "axios";

function createBlog(blog) {
  return <Blogs title={blog.title} content={blog.content} />;
}

function Home() {
  const [blogs, setblogs] = useState([]);

  axios
    .get("http://localhost:7000/home")
    .then((response) => {
      setblogs(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return <div>{blogs.map(createBlog)}</div>;
}

export default Home;
