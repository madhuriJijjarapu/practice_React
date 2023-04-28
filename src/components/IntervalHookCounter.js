import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(prevCount = prevCount + 1)
    }
    function doSomething() {
        console.log(someProp)
    }
    useEffect(() => {
        function doSomething() {
            console.log(someProp)
        }
        doSomething()
        console.log("useEffect called");
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [someProp])
    return (
        <div>{count}</div>
    )
}

export default IntervalHookCounter