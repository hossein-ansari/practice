import React, { useState } from "react";

export default function useCalc(value) {
  const [num, setNum] = useState(value);
  function addToNum() {
    setNum((prev) => prev + 1);
  }
  return [num, addToNum];
}
