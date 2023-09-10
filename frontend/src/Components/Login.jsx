import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import api from "../ApiConfig/index";





function Login() {
    const [userData, setUserData] = useState({ email: "", password: "" });

    const { dispatch, state } = useContext(AuthContext)
    console.log(state, "state from context into login componnt")



    const router = useNavigate();
    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            try {
                const response = await api.post('/login', { userData })
                if (response.data.success) {
                    dispatch({
                        type: "LOGIN",
                        payload: response.data.user
                    })
                    localStorage.setItem("batch2Token", JSON.stringify(response.data.token))
                    setUserData({ email: "", password: "" })
                    router('/')
                    toast.success(response.data.message)
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        } else {
            toast.error("All fields are mandtory.")
        }
    }

    useEffect(() => {
        if (state?.user?.name) {
            toast.success("You are already logged in.")
            router('/')
        }
    }, [state])

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label>Email :</label><br />
                <input type="email" name='email' onChange={handleChange} /><br />
                <label>Password :</label><br />
                <input type="password" name="password" onChange={handleChange} /><br />
                <input type="submit" value="Login" /><br />
            </form>
            <button onClick={() => router("/register")}>Click to go Register</button>
            <button onClick={() => router("/")}>Click to go Home</button>
        </div>
    )
}

export default Login;