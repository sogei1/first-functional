import React from 'react'

function reducer(counter, action){
    switch (action.type){
        case 'increment':
            return {count: counter.count + 1 }
        case 'decrement':
            return {count: counter.count - 1 }
        default:
            throw new Error()
    }
}

export default function CounterReducer() {
    const [counter, dispatch] = React.useReducer(reducer, {count: 0})
    return (
        <>
            Contatore: {counter.count}
            <button onClick={() => dispatch({type: 'decrement'})}>-1</button>
            <button onClick={() => dispatch({type: 'increment'})}>+1</button>
        </>
    )
}
