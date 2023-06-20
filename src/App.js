import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import Datas from "./Datas";
import Routes from "./Routes";
import Home from "./Home.js";
import {userName} from "./Contex";
import ChildComponent from "./ChildComponent";
export default function App() {
  const [post, usePost] = useState('test contex');
  const router = useRoutes(Routes);
  return (
    <userName.Provider value={post}>
      <Home />
      {router}
      <ChildComponent />
    </userName.Provider>
  );
}
