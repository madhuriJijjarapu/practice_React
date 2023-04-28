import React, { useState } from 'react'

function HookCounterTwo() {
    const initialValue = 0
    const [count, setCount] = useState(initialValue)

    return (
        <div>
            <h2>Count:{count}</h2>
            <button onClick={() => setCount(initialValue)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Incremment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + 5)}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo