import { useParams } from "react-router-dom";
import AuhtProtected from "./AuthProtected";

function SingleProduct() {

    const { id } = useParams();

    return (
        <AuhtProtected>
            <div>SingleProduct id - {id}</div>
        </AuhtProtected>
    )
}
export default SingleProduct;