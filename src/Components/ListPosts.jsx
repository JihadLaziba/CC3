import React from "react";
import "./ListPost.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ListPost() {
  const { id } = useParams();

  const post = useSelector((state) => state.post.data);

  const selectedPost = post.posts.filter((post) => post.id == id);
  return (
    <div>
      <header>
        {" "}
        <h1>{selectedPost.title} </h1>
      </header>
      <div className="Info">
        <p>{selectedPost.body}</p>
        <p>{selectedPost.tags}</p>
      </div>
    </div>
  );
}
