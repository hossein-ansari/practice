import React, { useMemo, useState } from "react";
import "./home.css";
import useToggle from "./useToggle";
import Memotry from "./Memotry";
export default function Home() {
  const [value, setValue] = useToggle(false);
  const [add, setAdd] = useState(0);
  const [less, setLess] = useState(0);
  
  function addNum() {
    setAdd((prevState) => prevState + 1);
  }
  let i = 0
  const addNumber = useMemo(() => {
    i++
    console.log('updated');
    return i
  }, [add]);

  function lessNum() {
    setLess((prevState) => prevState - 1);
  }
  return (
    <div>
      <h1>{value.toString()}</h1>
      <button onClick={setValue}>toggle</button>
      <button onClick={addNum}>{add}</button>
      
      <button onClick={lessNum}>{less}</button>
      <Memotry msg={less}/>
    </div>
  );
}
