import axios from 'axios';
import { createContext, useEffect, useReducer } from 'react';
import { toast } from 'react-hot-toast';

export const AuthContext = createContext();

const initialState = { user: null, products: null };
// action = { 
//     type :"LOGIN",
//     payload : { name :"swaraj" , picture :"http://www.mypicture.com"}
// }
const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            localStorage.removeItem("batch2Token")
            toast.success("Logout Successfully done.")
            return { ...state, user: null }
        default:
            return state;
    }
}


// hof, higher order function, it takes another component as a props
const HandleAuthContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        // alert("Page reloaded..")
        async function getCurrentUser() {
            const token = JSON.parse(localStorage.getItem("batch2Token"))
            if (token) {
                const response = await axios.post("http://localhost:8000/api/v1/get-current-user", { token })
                console.log(response, "response current userD")
                if (response.data.success) {
                    dispatch({
                        type: "LOGIN",
                        payload: response.data.user
                    })
                }
            }
        }
        getCurrentUser()
    }, [])

    return (
        <AuthContext.Provider value={{ dispatch, state }}>
            {children}
        </AuthContext.Provider>
    )
}

export default HandleAuthContext;