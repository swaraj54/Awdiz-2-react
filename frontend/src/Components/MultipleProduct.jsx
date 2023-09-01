import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../ApiConfig";

function MultipleProduct() {
    const [products, setProducts] = useState();
    const router = useNavigate();

    console.log(products, "products")

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await api.get('/get-all-products');
                if (response.data.success) {
                    setProducts(response.data.products)
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
        getProducts()
    }, [])

    return (
        <div>
            <h1>Multiple Product Page</h1>
            {products?.length ? <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                {products.map((product) => (
                    <div style={{ width: "30%", height: "300px", border: "2px solid black", marginBottom: '40px' }}>
                        <img src={product.img} alt="Img" />
                        <h1>Product Name : {product.name}</h1>
                        <h4>Product Price : {product.price}</h4>
                    </div>
                ))}
            </div> : <div>Loading..</div>}
        </div>
    )
}

export default MultipleProduct;