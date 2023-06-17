import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import Datas from "./Datas";
import Routes from "./Routes.js";
import Mainposts from "./Mainposts";
import NotFound from "./NotFound.js";
import Home from "./Home.js";
import About from "./About.js";
import Posts from "./Posts";
export default function App() {
  const [post, usePost] = useState(Datas);
  const router = useRoutes(Routes);

  return (
    <>
      <Home />
      {router}
        
        <Route />
        <Route  />
        <Route >
          <Route path="setting" element = {<h1>setting</h1>} />
          <Route path="dashboard" element = {<h1>dashboard</h1>}/>
        </Route>
        <Route ></Route>
     
    </>
  );
}
