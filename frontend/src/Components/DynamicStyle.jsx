import React, { useState } from 'react';
import './DynamicStyle.css';
import AuhtProtected from './AuthProtected';

const DynamicStyle = () => {

    const [isButtonActive, setIsButtonActive] = useState(false)

    const handleButtonClick = () => {
        setIsButtonActive(!isButtonActive)
    }
    const myClassName = isButtonActive ? "active-style" : "un-active-style"
    return (
        <AuhtProtected>
            <button onClick={handleButtonClick} className={myClassName}>
                {isButtonActive ? "active" : "unactive"}
            </button>
        </AuhtProtected>
    )
}

export default DynamicStyle