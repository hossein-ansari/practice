import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Datas from "./Datas";
import Mainposts from "./Mainposts";
import NotFound from './NotFound.js'
import Posts from './Posts'
export default function App() {
  const [post, usePost] = useState(Datas);
  return (
    <>
      <Routes>
      <Route path="/" />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:ID" element={<Mainposts />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}
