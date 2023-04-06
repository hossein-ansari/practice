import React from 'react'
import "./Carts.css";
export default function Carts(props) {
    let {name,age} = props
  return (
    <div><h3>{name}{age}</h3></div>
  )
}
