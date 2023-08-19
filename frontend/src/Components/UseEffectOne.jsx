import { useEffect, useState } from "react";


function UseEffectOne() {
    const [counter, setCounter] = useState(0);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        console.log("Rendered..")
    })

    return (
        <>
            <h1>Counter - {counter}</h1>
            <button onClick={() => setCounter((prevState) => prevState + 1)}>+</button>
            <button onClick={() => setFlag(true)}>TRUE</button>
        </>
    )
}

export default UseEffectOne;