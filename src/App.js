import React, { useState ,Profiler } from "react";
import Home from "./Home.js";
export default function App() {
  function renderInfo(actualDureation,baseDuration,startTime, commitTimegit) {
      console.log(actualDureation,baseDuration ,startTime, commitTime);
  }
  return (
    <>
    <Profiler id={'home-Page'} onRender={renderInfo}>
      <Home />
      </Profiler>
    </>
  );
}
