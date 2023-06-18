import React, { memo } from 'react'

const Memotry = memo(({msg})=>{
    console.log('changed');
    return(
        <div>
            <h1>what is love : {msg}</h1>
        </div>
    )
})
export default Memotry