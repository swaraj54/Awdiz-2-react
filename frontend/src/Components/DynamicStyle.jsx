import React, { useState } from 'react';
import './DynamicStyle.css';

const DynamicStyle = () => {

    const [isButtonActive, setIsButtonActive] = useState(false)

    const handleButtonClick = () => {
        setIsButtonActive(!isButtonActive)
    }
    const myClassName = isButtonActive ? "active-style" : "un-active-style"
    return (
        <div>
            <button onClick={handleButtonClick} className={myClassName}>
                {isButtonActive ? "active" : "unactive"}
            </button>
        </div>
    )
}

export default DynamicStyle