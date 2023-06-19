import React, { useState } from "react";
import Home from "./Home.js";
export default function App() {
  return (
    <>
    <Profiler id={'home-Page'} onRender={renderInfo}>
      <Home />
      </Profiler>
    </>
  );
}
