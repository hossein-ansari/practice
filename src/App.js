import React, { useState, useEffect } from "react";
import "./App.css";
import { isFocusable } from "@testing-library/user-event/dist/utils";
export default function App() {
  const [isFocus, setFocus] = useState(false);
  const [img, setImg] = useState("https://picsum.photos/200");
  const [clientX, setClientX] = useState(null);
  const [clientY, setClientY] = useState(null);
  useState(null);
  function mouseMove(p) {
    setFocus(!isFocus);
    setClientX(p.clientX)
    setClientY(p.clientY)
    console.log(p.clientX);
    console.log(p.clientY);

  }
  return (
    <div>
      <img
        onMouseMove={(p) => {
          mouseMove(p);
        }}
        src={img}
        alt=""
      />
      {isFocus === true && (
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: `right ${clientX * 2}px  bottom ${clientY * 2}px`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="imageZoom"
        ></div>
      )}
      <div></div>
    </div>
  );
}
