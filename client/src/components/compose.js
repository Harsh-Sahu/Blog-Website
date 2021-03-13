import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import axios from "axios";

function Posts() {
  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setPost((prevValue) => {
      if (name === "title")
        return {
          title: value,
          content: prevValue.content,
        };
      else if (name === "content")
        return {
          title: prevValue.title,
          content: value,
        };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPost = {
      title: post.title,
      content: post.content,
    };

    axios
      .post("http://localhost:7000/compose", newPost)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = "/";
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={post.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={post.content}
          placeholder="Write Your Blog Here...."
          rows={isExpanded ? 10 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Posts;
