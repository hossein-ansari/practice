import React from "react";
import "./home.css";
import useToggle from "./useToggle";
export default function Home() {
  const [value , setValue] = useToggle(false)
  return (
    <div>
      <h1>{value.toString()}</h1>
      <button onClick={setValue}>toggle</button>
      
    </div>
  );
}
