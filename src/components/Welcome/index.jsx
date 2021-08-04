
import React from 'react'

function Welcome(props) {
    const { name, isGreeting } = props;
    return (
        <div>
            {isGreeting ? 'Hello' : 'Goodbay'}, {name}!
        </div>
    )
}

export default Welcome;


