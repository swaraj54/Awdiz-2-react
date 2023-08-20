import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function StateEffect() {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        toast(`Counter updated ${counter}`)
    }, [counter])

    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={() => setCounter((prevState) => prevState + 1)}>+</button>
        </div>
    )
}

export default StateEffect;