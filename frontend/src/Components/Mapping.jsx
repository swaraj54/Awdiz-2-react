import React from 'react'

const Mapping = ({ array }) => {
    console.log(array, "array")
    return (
        <div id="check" style={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-between" }}>
            {array && array.map((swaraj,i) => (
                <div key={i} style={{ height: '450px', width: "18%", border: "3px solid black", marginBottom: "40px" }}>
                    <img src={swaraj.image} />
                    <h2>Name : {swaraj.name}, {i}</h2>
                    <h4>Price : {swaraj.price}</h4>
                    <button>Add to cart</button>
                </div>
            ))}
        </div>
    )
}

export default Mapping