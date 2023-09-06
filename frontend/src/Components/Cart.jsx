import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import api from '../ApiConfig';
import AuhtProtected from './AuthProtected';

const Cart = () => {
    const [cartProduct, setCartProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const { state } = useContext(AuthContext);


    useEffect(() => {
        async function getCartProducts() {
            try {
                const response = await api.post('/buyer/get-cart-products', { userId: state?.user?.userId })
                if (response.data.success) {
                    setCartProducts(response.data.cartProducts)
                    setTotalPrice(response.data.totalPrice)
                }
            } catch (error) {

            }
        }
        if (state?.user?.userId) {
            getCartProducts()
        }
    }, [state])

    return (
        <AuhtProtected>
            {cartProduct?.length ? <div>
                <h1>Total Price - {totalPrice}</h1>
                {cartProduct.map((pro) => (
                    <div>{pro.name}</div>
                ))}
            </div> : <div>Loading..</div>}
        </AuhtProtected>
    )
}

export default Cart