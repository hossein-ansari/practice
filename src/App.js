import React,{useState} from 'react'
import {Link , Routes,Route } from 'react-router-dom'
import Datas from './Datas'
export default function App() {
  const [post ,usePost] = useState(Datas)
  return (
    <div>
        <Link to='/3'>lol3</Link>
      <Routes>
        {post.map(post =>(
         <Link to='/post.id'></Link>
        ))}

      </Routes>
    </div>
  )
}
