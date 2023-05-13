import React,{useState} from 'react';
import {Link  } from 'react-router-dom';
import Datas from './Datas';
export default function App() {
  const [post ,usePost] = useState(Datas)
  return (
    <div>     
        {post.map(post =>(
         <Link to={`/${post.id}`}></Link>
        ))}
    </div>
  )
}
