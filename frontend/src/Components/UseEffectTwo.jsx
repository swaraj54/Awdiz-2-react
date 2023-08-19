import { useEffect, useState } from "react";

function UseEffectTwo() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Rendered..")
    }, [])

    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={() => setCounter((prevState) => prevState + 1)}>+</button>
        </div>
    )
}

export default UseEffectTwo;