import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import axios from "axios";

function Blog(props) {
  function handleDelete(e) {
    axios.post("http://localhost:7000/delete", props);
    window.location.reload();
  }

  return (
    <Link to={"/post/" + props.title}>
      <div className="note">
        <img
          src={"https://source.unsplash.com/3000x3000/?" + props.title}
          alt="Hs"
        />
        <h1>{props.title}</h1>
        <p>{props.content.substring(1, 150)}...</p>
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </div>
    </Link>
  );
}

export default Blog;
