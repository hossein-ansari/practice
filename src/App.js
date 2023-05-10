import React from 'react'
import {Link , Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
        <Link to='/3'>lol3</Link>
      <Routes>
        <Route path='/' element={<h1>lol1</h1>}></Route>
        <Route path='/3' element={<h3>lol3</h3>}></Route>
        <Route path='/2' element={<h2>lol2</h2>}></Route>
      </Routes>
    </div>
  )
}
