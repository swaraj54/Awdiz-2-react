import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
    const [inputValue, setInputValue] = useState("");
    let count = useRef("")

    useEffect(() => {

        console.log('Rerendered...')
    })

    const numberInputOnWheelPreventChange = (e) => {
        e.target.blur()
        e.stopPropagation()
        setTimeout(() => {
            e.target.focus()
        }, 0)
    }


    return (
        <div>
            <h1>Count : {count?.current}</h1>
            <input type='number' onWheel={numberInputOnWheelPreventChange} />
            <input onChange={(event) => count.current = event.target.value} />
        </div>
    )
}

export default Ref