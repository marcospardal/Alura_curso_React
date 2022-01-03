import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../assets/css/post.css";
import { busca } from "../api/api";

const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    busca(`posts/${id}`, setPost);
  }, [id]);

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="carta__texto">{post.body}</p>
      </article>
    </main>
  );
};

export default Post;
