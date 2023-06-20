import React, { useContext } from 'react'
import { userName } from './Contex'
export default function ChildComponent() {
    const username = useContext(userName)
  return (
    <div>{username}</div>
  )
}
