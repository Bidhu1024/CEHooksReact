import React, { useEffect } from 'react'
import { useState } from 'react';

const UEHookCounterOne = () => {
    const [counter, setCounter] = useState(0)
    const [name,setName] = useState('');

    useEffect(()=>{
        console.log('updated')
        document.title = `You clicked ${counter} times`
    },[counter])
  return (
    <div>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={()=>setCounter(counter+1)}>Click {counter}</button>
    </div>
  )
}

export default UEHookCounterOne