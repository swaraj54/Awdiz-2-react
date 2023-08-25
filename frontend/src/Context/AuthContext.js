import { createContext, useReducer } from 'react';

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
            return { ...state, user: null }
        default:
            return state;
    }
}


// hof, higher order function, it takes another component as a props
const HandleAuthContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AuthContext.Provider value={{ dispatch, state }}>
            {children}
        </AuthContext.Provider>
    )
}

export default HandleAuthContext;