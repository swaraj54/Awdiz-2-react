import { useContext } from 'react';
import './../Components/Styles/Home.css'
import { AuthContext } from '../Context/AuthContext';

function Home() {

    const { state, dispatch } = useContext(AuthContext)

    return (
        <div>
            <h1> Home Page user - {state?.user?.name}</h1>
            <button onClick={()=> dispatch({type : "LOGOUT"})}>Logout</button>
        </div>
    )
}

export default Home;