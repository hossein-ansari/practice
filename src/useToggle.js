import React from "react";
import { useEffect, useState } from "react";
export default function useToggle(v) {
  const [value, setValue] = useState(v);
  function settoggle() {
    if (value == true) {
      setValue(false);
    } else {
      setValue(true);
    }
  }
  return [value, settoggle];
}
