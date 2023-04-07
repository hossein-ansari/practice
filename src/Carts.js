import React from 'react'
import "./Carts.css";
export default function Carts(props) {
    let {name,id} = props
  return (
    <div><h3>{name}{id}</h3></div>
  )
}
