import React from 'react'

export default function CounterFunc(props) {

    const [counter, setCounter] = React.useState(0);
    //const [name, setName] = React.useState("Unknown")

    const handleIncrement = () => setCounter((oldCounter) => oldCounter + 1)

    return (
        <>
            <h1>Contatore: {counter}</h1>
            <button onClick={handleIncrement}>Incrementa</button>
        </>
    )
}
