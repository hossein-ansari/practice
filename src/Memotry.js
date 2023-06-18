import React, { memo, useRef } from 'react'

const Memotry = memo(({msg})=>{
    
    console.log()
    return(
        <div>
            <h1  >what is love : {msg}</h1>
            
        </div>
    )
})
export default Memotry