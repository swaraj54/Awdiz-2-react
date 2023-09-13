import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";
import AuhtProtected from "../AuthProtected";
import api from "../../ApiConfig";

const AddProduct = () => {
    const { state } = useContext(AuthContext)
    const [productData, setProductData] = useState({ name: '', price: "", image: "" })
    const router = useNavigate();
    const handleChange = (event) => {
        // console.log(event.target.value, "- value", event.target.name, "- name")
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        // alert("SUBmitted")
        if (productData.name && productData.price && productData.image && state?.user?.userId) {
            try {
                const response = await api.post("/seller/add-product", { productData, userId: state?.user?.userId });
                if (response.data.success) {
                    setProductData({ name: '', price: "", image: "" })
                    router('/seller-product')
                    toast.success(response.data.message)
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        } else {
            alert("All fields are mandtory.")
        }
    }




    return (
        <AuhtProtected>
            <h1>Add Product Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input value={productData.name} type="text" name='name' onChange={handleChange} /><br />
                <label>Price</label><br />
                <input value={productData.price} type="number" name='price' onChange={handleChange} /><br />
                <label>Image</label><br />
                <input value={productData.image} type="text" name='image' onChange={handleChange} /><br />
                <input type="submit" value="Add Product" /><br />
            </form>
            <button onClick={() => router('/seller-product')}>Find your products ?</button>
        </AuhtProtected>
    )
}


export default AddProduct