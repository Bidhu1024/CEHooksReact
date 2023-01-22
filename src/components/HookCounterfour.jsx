import React from 'react'
import { useState } from 'react';

const HookCounterfour = () => {
    const [items,setItems] = useState([])
    const addItem =()=>{
        console.log()
        setItems([...items,
            {
                    id:items.length,
                    value:Math.floor(Math.random()*10)+1,
            }
         ] )
    }

  return (
    <div>
        <ul>
            {
                items.map((item)=>{
                  return  <li key={item.id}>{item.value}</li>
                })
            }
        </ul>
        <button onClick={addItem}>Add</button>
    </div>
  )
}

export default HookCounterfour