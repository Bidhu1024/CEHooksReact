import React from 'react'
import { useState } from 'react'

const ClassCounter = () => {
    const [count, setCount]  = useState(0);
  return (
    <div>
        <button onClick={()=>setCount(count + 1)}>
            Count : {count}
        </button>
    </div>
  )
}

export default ClassCounter