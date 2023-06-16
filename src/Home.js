import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
        <ul>
            <li><Link to={'/'}>home</Link></li>
            <li><Link to={'/posts'}>posts</Link></li>
            <li><Link to={'./'}>about</Link></li>
        </ul>
    </div>
  )
}
