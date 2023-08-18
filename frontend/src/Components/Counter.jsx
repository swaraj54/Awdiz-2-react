import { useState } from "react";

function Counter() {

    const [counter, setCounter] = useState(0); //1
    console.log(counter, "-counter")

    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={() => setCounter((prevState) => prevState + 1)}>+</button>
        </div>
    )
}

export default Counter;