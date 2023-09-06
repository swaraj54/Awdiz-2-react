import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const { state, dispatch } = useContext(AuthContext)
    console.log(state?.user, "user in navbar")
    const router = useNavigate();

    function logout() {
        dispatch({ type: "LOGOUT" })
        router('/')
    }

    return (
        <div style={{ display: "flex", justifyContent: 'space-around', border: '2px solid black', height: "70px" }}>
            <div style={{ width: "10%" }}><h3 onClick={() => router('/')}>Logo</h3></div>
            <div style={{ width: "50%", display: 'flex', justifyContent: 'space-around' }}>
                <h3 onClick={() => router('/Multiple-Product')}>Mens</h3>
                <h3 onClick={() => router('/Multiple-Product')}>Womens</h3>
                <h3 onClick={() => router('/Multiple-Product')}>Kids</h3>
                {state?.user?.role == 'seller' && <>
                    <h3>Your Product - multiple pgae</h3>
                    <h3>Update Product - single page product</h3>
                    <h3>Add Product - register</h3>
                </>}
            </div>
            <div style={{ width: "20%", display: 'flex', justifyContent: 'space-around' }}>
                {state?.user?.userId ? <>
                    <h3>Profile</h3>
                    <h3 onClick={() => router('/cart')}>Cart</h3>
                    <h3 onClick={logout}>Logout</h3>
                </> : <h3 onClick={() => router('/login')}>Login/Register</h3>}
            </div>
        </div>
    )
}

export default Navbar