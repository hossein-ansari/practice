import React, { useState } from "react";

export default function App() {
  const { count, setCount } = useState(0);
  const up = () => {
    setCount( count + 1)
  };
  const down = () => {
    setCount( count - 1)
  };
  return (
    <div>
      <button onClick={up}>+</button>
      <h1>{count}</h1>
      <button onClick={down}>+</button>
    </div>
  );
}
