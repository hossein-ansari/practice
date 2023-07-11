import React, { useContext } from 'react'
import './app.css'
import { Contexts } from '../contexts/Context'
import Board from '../game-board/Board'

export default function App() {
    let fetchContexts = useContext(Contexts)
    return (
        <div className='app-container'>
            <Board />
        </div>
    )
}