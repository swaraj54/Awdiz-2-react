import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../ApiConfig';
import toast from 'react-hot-toast';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }

    const updateProduct = async (event) => {
        event.preventDefault();
        if (product.name && product.price && product.image) {
            try {
                const response = await api.post('/update-product', { product })
                if (response.data.success) {
                    setProduct(response.data.product)
                    toast.success(response.data.message)
                }
            } catch (error) { }
        }
    }

    useEffect(() => {
        async function getData() {
            try {
                const response = await api.post("/get-single-product", { productId: id })
                if (response.data.success) {
                    setProduct(response.data.product)
                }
            } catch (error) { }
        }
        if (id) {
            getData()
        }
    }, [id])


    return (
        <div>
            {product?.name ? <div>
                <form onSubmit={updateProduct}>
                    <label>Product Name</label><br />
                    <input value={product.name} type='text' name='name' onChange={handleChange} /><br />
                    <label>Product Price</label><br />
                    <input value={product.price} type='number' name='price' onChange={handleChange} /><br />
                    <label>Product Image</label><br />
                    <input value={product.image} type='text' name='image' onChange={handleChange} /><br />
                    <input type='submit' /><br />
                </form>
                <img src={product.image} />
                <h1>{product.name}</h1>
            </div> : <h1>Loading...</h1>}
        </div>
    )
}

export default UpdateProduct