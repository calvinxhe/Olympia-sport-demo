import Nav from "../../components/Nav";
import ProductList from "./product-collection";

const ProductListPage = () => {
    return (
        <div>
        <Nav />
        <div className="pt-32 px-20">
        <ProductList />
        </div>
        </div>
     );
}
 
export default ProductListPage;