import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext';

const SellerProduct = () => {
    const [sellerProducts, setSellerProducts] = useState([]);
    const { state } = useContext(AuthContext)
    useEffect(() => {
        async function getSellerProduct() {
            const response = await axios.post("/seller-product", { userId: state?.user?.userId })
            if (response.data.success) {
                setSellerProducts(response.data.products)
            }
        }
        if (state?.user?.userId) {
            getSellerProduct()
        }
    }, [state])
    return (
        <div>SellerProduct</div>
    )
}

export default SellerProduct