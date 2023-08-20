import { useState } from "react";

function Counter(props) {
    const { myName, myAge, myStudents, name, setName } = props;
    console.log(myName, "myname", myAge, "myAge", myStudents, "myStudents")
    const [counter2, setCounter2] = useState(0)
    const [counter, setCounter] = useState(0); //1  2 3 4 5 6
    const [flag, setFlag] = useState(false);
    console.log(counter, "-counter")

    return (
        <div>
            <h1>Name - {name}</h1>
            <button onClick={() => setName("xyz")}>Change name to xyz</button>
            {/* {flag ? <h1>Flag is true</h1> : <h1>Flag is false</h1>}

            <h1>Counter - {counter}</h1>
            <button onClick={() => setCounter((prevState) => prevState + 1)}>+</button>
            <h2>Counter 2 - {counter2}</h2>
            <button onClick={() => setCounter2((prevState) => prevState + 1)}> + FOR 2 COUNTER </button>
            <button onClick={() => setFlag(true)} >true</button> */}
        </div >
    )
}

export default Counter;