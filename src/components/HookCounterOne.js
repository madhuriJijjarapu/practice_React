import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')
    useEffect(() => {
        console.log("UseEffect-Updating document title ")
        document.title = `your title ${count} clicked`
    }, [count]
    )

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounterOne