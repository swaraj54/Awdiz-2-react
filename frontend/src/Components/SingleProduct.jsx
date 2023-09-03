import { useParams } from "react-router-dom";
import AuhtProtected from "./AuthProtected";
import { toast } from "react-hot-toast";
import api from "../ApiConfig";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function SingleProduct() {

    const { id } = useParams();
    const { state } = useContext(AuthContext)

    async function addProduct() {
        if (id && state?.user) {
            try {
                const { data } = await api.post('/buyer/add-cart', { productId: id, userId: state?.user?.userId })
                if (data.success) {
                    toast.success(data.message)
                }
            } catch (error) {
                console.log(error, "error while adding to product to cart")
            }
        } else {
            toast.error("Internal sever error, please try again.")
        }
    }

    return (
        <AuhtProtected>
            <div>
                <h1>SingleProduct id - {id}</h1>
                <button onClick={addProduct} >Add to Cart</button>
            </div>
        </AuhtProtected>
    )
}
export default SingleProduct;