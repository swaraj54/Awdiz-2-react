import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import api from '../../ApiConfig';
import { useNavigate } from 'react-router-dom';

const SellerProduct = () => {
    const [sellerProducts, setSellerProducts] = useState([]);
    const { state } = useContext(AuthContext)
    const router = useNavigate();
    useEffect(() => {
        async function getSellerProduct() {
            try {
                const response = await api.post("/seller/seller-products", { userId: state?.user?.userId })
                if (response.data.success) {
                    setSellerProducts(response.data.products)
                }
            } catch (error) { }
        }
        if (state?.user?.userId) {
            getSellerProduct()
        }
    }, [state])
    console.log(sellerProducts, "sellerProducts")
    return (
        <div>
            <h1>Your Products</h1>
            {sellerProducts?.length ? <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {sellerProducts.map((product) => (
                    <div key={product._id}>
                        <img src={product.image} />
                        <h2>Name : {product.name}</h2>
                        <h4>Price : {product.name}$</h4>
                        <button onClick={() => router(`/update-product/${product._id}`)}>Update Product</button>
                        <button>Delete Product</button>
                    </div>
                ))}
            </div> : <div>No products found</div>}
        </div>
    )
}

export default SellerProduct