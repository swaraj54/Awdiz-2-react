import { useNavigate } from "react-router-dom";

function Login() {
    const router = useNavigate();
    return (
        <div>
            <h1>Login page</h1>
            <button onClick={() => router("/register")}>Click to go Register</button>
            <button onClick={() => router("/")}>Click to go Home</button>
        </div>
    )
}

export default Login;