import React,{useState} from "react";
import { useParams,Navigate } from "react-router-dom";
import Datas from "./Datas";

export default function MainPosts() {
  const params = useParams();
  const [post, usePost] = useState(Datas);
  const hasPost = post.some(post => post.id == params.ID)
  console.log('lol');
  return (
    <div>
      {!hasPost ? (
      <> <Navigate to='/posts' /> </>
      ): (
      <> {post.find(post => post.id == params.ID).name} 
      </>)
      }
    
    </div>
  );
}
