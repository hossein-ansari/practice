import React, { useContext } from 'react'
import { userName } from './Contex'
import * as ReactDOM from 'react-dom';

export default function ChildComponent() {
    const username = useContext(userName)
  return ReactDOM.createPortal(
    <div>{username}</div>,
    document.getElementById('portalTest')
  )
}
