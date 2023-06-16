import React, { useState } from "react";
import "./mainpost.css";
import { useParams, Navigate } from "react-router-dom";
import Datas from "./Datas";

export default function MainPosts() {
  const params = useParams();
  console.log(params.id);
  const [post, usePost] = useState(Datas);
  const hasPost = post.some((post) => post.id == params.id);
  const found = post.find(obj => obj.id == params.id)
  console.log(found);
  return (
    <div>
      {found.name}
    </div>
  );
}
