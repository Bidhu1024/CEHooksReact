import React, { useState } from "react";

const HookCounterTwo = () => {
    const initialCount = 0;
    const [count,setCount] = useState(initialCount);

const Incrementfive=()=>{
    for(let i = 0;i<5;i++){
        setCount(prev=> prev+1)
    }
}

  return (
    <div>
Count: {count}

<button onClick={()=>setCount(initialCount)}>
Reset
</button>
<button onClick={()=>setCount(prev=> prev-1)}>Decrement</button>
<button onClick={()=>setCount(prev => prev +1)}>Increment</button>
<button onClick={Incrementfive}>Increment 5</button>
    </div>
  )
};

export default HookCounterTwo;
