import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({ firstname: '', lastname: '' })
    return (
        <div>
            <input type="text" value={name.firstname} onChange={event => setName({ ...name, firstname: event.target.value })} />
            <input type="text" value={name.lastname} onChange={event => setName({ ...name, lastname: event.target.value })} />
            <h2>Your first name is:{name.firstname}</h2>
            <h2>Your last name is:{name.lastname}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree