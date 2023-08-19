import { useNavigate } from "react-router-dom";

function MultipleProduct() {

    const router = useNavigate();

    return (
        <div>
            <h1>MultipleProduct</h1>
            <button onClick={() => router('/single-product/9876546789')}> Re direct</button>
        </div>
    )
}

export default MultipleProduct;