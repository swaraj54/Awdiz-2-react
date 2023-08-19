import { useEffect, useState } from "react";



function UseEffectThree() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0)

    // states
    // function 
    // effects

    useEffect(() => { console.log("Inside effectG") }, [counter1])


    return (
        <div>
            <h1>Counter 1 - {counter1}</h1>
            <button onClick={() => setCounter1((prevState) => prevState + 1)}>+ for counter 1</button>
            <h1>Counter 2 - {counter2}</h1>
            <button onClick={() => setCounter2((prevState) => prevState + 1)}>+ for counter 2</button>
        </div>
    )
}

export default UseEffectThree;