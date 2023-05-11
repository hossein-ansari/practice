import React from 'react'
import {Link , Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
        <Link to='/3'>lol3</Link>
      <Routes>
        <Route path='/' element={<h1>lol1</h1>}></Route>

      </Routes>
    </div>
  )
}
