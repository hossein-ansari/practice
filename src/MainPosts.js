import React,{useState} from "react";
import { useParams } from "react-router-dom";
import Datas from "./Datas";

export default function MainPosts() {
  const params = useParams();
  const [post, usePost] = useState(Datas);
  console.log('lol');
  return (
    <div>
    lol
    </div>
  );
}
