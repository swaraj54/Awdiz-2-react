import { useContext, useEffect, useRef, useState } from 'react';
import './../Components/Styles/Home.css'
import { AuthContext } from '../Context/AuthContext';

function Home() {

    const { state, dispatch } = useContext(AuthContext)
    const [counter, setCounter] = useState(0)
    let myObject = useRef(0);
    // { current: 0 }

    useEffect(() => {
        console.log("Rendered...")
    })

    function updateCounter() {
        myObject.current = myObject.current + 1
    }

    return (
        <div>
            <h1> Home Page user - {state?.user?.name}</h1>
            <h1>Counter : {counter}</h1>
            <button onClick={() => setCounter((v) => v + 1)}>+ for useState counter</button>
            <h1>Counter by Ref : {myObject?.current}</h1>
            <button onClick={updateCounter}>+ for useRef counter</button>
        </div>
    )
}

export default Home;