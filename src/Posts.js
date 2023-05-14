import React,{useState} from 'react'
import Datas from "./Datas";
import { Link } from 'react-router-dom';
export default function Posts() {
  const [post, usePost] = useState(Datas);
  return (
    <div>{post.map(post =>(<Link to={`/post/${post.id}`}>  post {post.name}  </Link>))}</div>
  )
}
