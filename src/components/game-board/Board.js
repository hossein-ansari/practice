import React, { useContext, useState } from 'react'
import { Contexts } from '../contexts/Context'
import './board.css'

export default function Board() {
    const fetchContexts = useContext(Contexts)
    const [housesIds, setHousesIds] = useState(fetchContexts.determineHousesIds())
    console.log(housesIds)
    return (
        <div className='board-container'>
            <ul>
                {
                    housesIds.map(item => (
                        <li key={item.id}>{item.id}</li>
                    ))
                }
            </ul>
        </div>
    )
}
