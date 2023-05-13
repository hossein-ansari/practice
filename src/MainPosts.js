import React,{useState} from "react";
import { useParams } from "react-router-dom";
import Datas from "./Datas";

export default function MainPosts() {
  const params = useParams();
  const [post, usePost] = useState(Datas);
  return (
    <div>main post = {post.find((findid) => findid.id == params.id).name}
    lol
    </div>
  );
}
