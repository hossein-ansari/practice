import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import Datas from "./Datas";
import Routes from "./Routes";
import Home from "./Home.js";
import ContexProvider from "./Contex";
import ChildComponent from "./ChildComponent";
export default function App() {
  const [post, usePost] = useState(Datas);
  const router = useRoutes(Routes);
  return (
    <ContexProvider>
      <Home />
      {router}
      <ChildComponent />
    </ContexProvider>
  );
}
