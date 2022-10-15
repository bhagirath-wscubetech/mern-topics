import React, { useState } from 'react'

// useState is a hook that creates state in functional components
export default function Counter() {
    console.log("Counter - Render / Re-render");
    const [count, setCount] = useState(0)
    const inc = () => {
        // setAmount(count * 500)
        setCount(count + 1)
    }
    const desc = () => {
        // setAmount(count * 500)
        setCount(count - 1)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <button onClick={inc}>+</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={desc}>-</button>
            <h2>
                <span> Count: {count} </span>
                /
                <span> ₹ {500 * count} </span>
            </h2>
            <h4>
                {new Date().toDateString()}
            </h4>
        </div>
    )
}
