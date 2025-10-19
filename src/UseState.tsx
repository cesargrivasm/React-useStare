import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount]=useState(0);
  return (
    <div>
      <h1>Use State Component</h1>
      {count}
      <hr/>
      <button onClick={()=>{
        setCount(count + 1);
      }}>Incrementar</button>

      <button onClick={()=>{
        setCount(count - 1);
      }}>Decrementar</button>

      <button onClick={()=>{
        setCount(0);
      }}>Reset</button>

    </div>
  )
}

export default UseState
