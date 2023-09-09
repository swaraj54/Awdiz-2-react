import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Counter from './Components/Counter';
import UseEffectOne from './Components/UseEffectOne';
import UseEffectTwo from './Components/UseEffectTwo';
import UseEffectThree from './Components/UseEffectThree';
import UseEffectFour from './Components/UseEffectFour';
import SingleProduct from './Components/SingleProduct';
import MultipleProduct from './Components/MultipleProduct';
import { useContext, useState } from 'react';
import Mapping from './Components/Mapping';
import Props from './Components/Props';
import StateEffect from './Components/StateEffect';
import DynamicStyle from './Components/DynamicStyle';
import { AuthContext } from './Context/AuthContext';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import SellerProduct from './Components/Seller/SellerProduct';
import AddProduct from './Components/Seller/AddProduct';
import UpdateProduct from './Components/Seller/UpdateProduct';
import Memo from './Components/Memo';
import Callback from './Components/Callback';

function App() {
  const { state } = useContext(AuthContext);
  console.log(state, "state here from context")
  const [name, setName] = useState("abhi")
  console.log(name, "name in app")
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/counter' element={<Counter name={name} setName={setName} myName="xyz" myAge='564' myStudents={["a", "gf", "awde"]} />} />
        <Route exact path='/effect-1' element={<UseEffectOne />} />
        <Route exact path='/effect-2' element={<UseEffectTwo />} />
        <Route exact path='/effect-3' element={<UseEffectThree />} />
        <Route exact path='/effect-4' element={<UseEffectFour />} />
        <Route exact path='/Multiple-Product' element={<MultipleProduct />} />
        <Route exact path='/single-product/:id' element={<SingleProduct />} />
        <Route exact path='/mapping' element={<Mapping array={[{ name: 'shose', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiuda5S0Nbje2j3H6gUISQN3GYSTrOXYGX2X2D1GMg1axDJDxZ8eEAWe371DNT3hpPx8&usqp=CAU", price: "1000" }, { name: 'shose', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiuda5S0Nbje2j3H6gUISQN3GYSTrOXYGX2X2D1GMg1axDJDxZ8eEAWe371DNT3hpPx8&usqp=CAU", price: "1000" }, { name: 'shose', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiuda5S0Nbje2j3H6gUISQN3GYSTrOXYGX2X2D1GMg1axDJDxZ8eEAWe371DNT3hpPx8&usqp=CAU", price: "1000" }, { name: 'shose', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiuda5S0Nbje2j3H6gUISQN3GYSTrOXYGX2X2D1GMg1axDJDxZ8eEAWe371DNT3hpPx8&usqp=CAU", price: "1000" }, { name: 'shose', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiuda5S0Nbje2j3H6gUISQN3GYSTrOXYGX2X2D1GMg1axDJDxZ8eEAWe371DNT3hpPx8&usqp=CAU", price: "1000" }, { name: 'shose', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiuda5S0Nbje2j3H6gUISQN3GYSTrOXYGX2X2D1GMg1axDJDxZ8eEAWe371DNT3hpPx8&usqp=CAU", price: "1000" }, { name: 'shose', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiuda5S0Nbje2j3H6gUISQN3GYSTrOXYGX2X2D1GMg1axDJDxZ8eEAWe371DNT3hpPx8&usqp=CAU", price: "1000" }]} />} />
        <Route exact path='/props' element={<Props />} />
        <Route exact path='/stateeffect' element={<StateEffect />} />
        <Route exact path="/dynamic-style" element={<DynamicStyle />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/seller-product" element={<SellerProduct />} />
        <Route exact path="/add-product" element={<AddProduct />} />
        <Route exact path="/update-product" element={<UpdateProduct />} />
        <Route exact path='/memo' element={<Memo />} />
        <Route exact path='/callback' element={<Callback />} />
      </Routes>
    </div>
  );
}

export default App;
