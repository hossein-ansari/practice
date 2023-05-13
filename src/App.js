import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Datas from "./Datas";
import MainPosts from "./Datas";

export default function App() {
  const [post, usePost] = useState(Datas);
  return (
    <div>
      <Routes>
        <Route path="/posts" element={<Datas />}></Route>
        <Route path="/posts/:id" element={<MainPosts />}></Route>
      </Routes>
    </div>
  );
}
