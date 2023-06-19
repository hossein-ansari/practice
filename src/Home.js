import React, { useMemo, useState,useRef } from "react";
import "./home.css";
import useToggle from "./useToggle";
import Memotry from "./Memotry";
import useCalc from "./useCalc";
export default function Home() {
  const [value, setValue] = useToggle(false);
  const [add, setAdd] = useCalc(0);
  const [less, setLess] = useState(0);
  const Input = useRef()
  console.log(Input.current);

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
      <button onClick={setAdd}>{add}</button>
      <input ref={Input} type="text" />
      <button onClick={lessNum}>{less}</button>
      <Memotry msg={less}/>
    </div>
  );
}
