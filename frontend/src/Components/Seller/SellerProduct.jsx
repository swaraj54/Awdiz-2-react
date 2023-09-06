import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SellerProduct = () => {
    const [sellerProducts, setSellerProducts] = useState([]);
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