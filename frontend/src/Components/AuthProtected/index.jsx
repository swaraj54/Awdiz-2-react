import { useContext, useEffect } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


function AuhtProtected({ children }) {

    const { state } = useContext(AuthContext);
    const router = useNavigate();

    useEffect(() => {
        if (!state?.user?.name) {
            setTimeout(() => { router('/') }, 3000)
        }
    }, [state])

    if (state?.user?.role) {
        return (
            children
        )
    } else {
        return (
            <div>
                <h1>This page is Auth Protected. Do Login, redirecting you to home page in 3 sec </h1>
                <button onClick={() => router('/login')}>Go to Login</button>
            </div>
        )
    }
}

export default AuhtProtected;