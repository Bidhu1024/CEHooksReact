import React, { useEffect } from 'react'
import { useState } from 'react';

const UEHookCounterOne = () => {
    const [counter, setCounter] = useState(0)
    useEffect(()=>{
        document.title = `You clicked ${counter} times`
    })
  return (
    <div>
        <button onClick={()=>setCounter(counter+1)}>Click {counter}</button>
    </div>
  )
}

export default UEHookCounterOne