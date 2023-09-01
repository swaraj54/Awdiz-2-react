import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-hot-toast";
import api from "../ApiConfig/index";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
    const { state } = useContext(AuthContext)
    const [userData, setUserData] = useState({ name: '', email: "", password: "", confirmPassword: "" })
    const router = useNavigate();
    console.log(userData, "userData")
    const handleChange = (event) => {
        // console.log(event.target.value, "- value", event.target.name, "- name")
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        // alert("SUBmitted")
        if (userData.name && userData.email && userData.password && userData.confirmPassword) {
            if (userData.password === userData.confirmPassword) {
                try {
                    const response = await api.post("/register", { userData });
                    if (response.data.success) {
                        setUserData({ name: '', email: "", password: "", confirmPassword: "" })
                        router('/login')
                        toast.success(response.data.message)
                    }
                } catch (error) {
                    toast.error(error.response.data.message)
                }
            }
            else {
                alert('Password and Confirm Password not matchh..')
            }
        } else {
            alert("All fields are mandtory.")
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
            <h1>Register page</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type="text" name='name' onChange={handleChange} /><br />
                <label>Email</label><br />
                <input type="email" name='email' onChange={handleChange} /><br />
                <label>Password</label><br />
                <input type="password" name='password' onChange={handleChange} /><br />
                <label>Confirm Password</label><br />
                <input type="password" name='confirmPassword' onChange={handleChange} /><br />
                <input type="submit" value="Register" /><br />
            </form>
            <button onClick={() => router('/login')}>Click here to go Login</button>
            <button onClick={() => router('/')}>Click here to go Home</button>
        </div>
    )
}

export default Register;