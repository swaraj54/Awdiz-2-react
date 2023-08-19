import { useParams } from "react-router-dom";

function SingleProduct() {

    const { id } = useParams();

    return (
        <div>SingleProduct id - {id}</div>
    )
}
export default SingleProduct;