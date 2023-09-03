import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


function AuhtProtected({ children }) {

    const { state } = useContext(AuthContext);
    const router = useNavigate();

    if (state?.user?.name) {
        return (
            children
        )
    } else {
        return (
            <div>
                <h1>This page is Auth Protected. Do Login</h1>
                <button onClick={() => router('/login')}>Go to Login</button>
            </div>
        )
    }
}

export default AuhtProtected;