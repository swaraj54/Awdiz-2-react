import { useContext } from 'react';
import './../Components/Styles/Home.css'
import { AuthContext } from '../Context/AuthContext';

function Home() {

    const { state } = useContext(AuthContext)

    return (
        <div>
            Home Page user - {state?.user?.name}
        </div>
    )
}

export default Home;