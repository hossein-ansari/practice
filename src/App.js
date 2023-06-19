import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import Datas from "./Datas";
import Routes from "./Routes";
import Home from "./Home.js";
export default function App() {
  const [post, usePost] = useState(Datas);
  const router = useRoutes(Routes);
  return (
    <>
      <Home />
      
      {router}
    </>
  );
}
