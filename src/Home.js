import React from 'react'
import "./home.css";

import { Link } from 'react-router-dom'
export default function Home() {

  return (
    <div>
        <ul>
            <li><Link  className="links" to={'/'}>home</Link></li>
            <li><Link  className="links" to={'/posts'}>posts</Link></li>
            <li><Link  className="links" to={'./about'}>about</Link></li>
            <li><Link  className="links" to={'./panel'}>panel</Link></li>

        </ul>
    </div>
  )
}
