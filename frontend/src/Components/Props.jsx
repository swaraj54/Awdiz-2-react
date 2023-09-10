import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const MyParentComponent = () => {
    // const [products, setProducts] = useState([]);
    // const { state } = useContext(AuthContext);
    // useEffect(() => {
    //     async function getSellersProducts() {
    //         const response = await axios.post("/get-sellers-products", { userId: state?.user?.userId })
    //         if (response.data.success) {
    //             setProducts(response.data.products)
    //         }
    //     }
    //     if (state?.user?.userId) {
    //         getSellersProducts()
    //     }
    // }, [state])

    return (
        <h1>Hi</h1>
    );

}
export default MyParentComponent;



// const getSellerProducts = async (req, res) => {
//     try {
//         const { userId } = req.body;
//         const products = await Product.find({ sellerId: userId })
//         if (products?.length) {
//             return res.json({ success: true, products })
//         } else {
//             return res.json({ success: false, message: 'Prdocuts not dfound' })

//         }
//     } catch (error) {

//     }
// }


// const productSchema = new Schema({
//     name: { type: String },
//     sellerId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User"
//     }
// })


// const createProduct =()=>{
//     cosnt newProduct = new Product({
//         name, sellerId : userId
//     })
// }







