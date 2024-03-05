import ProductCard from "./products-card";
import NoResults from "./no-results";
import productData from "./products.json"

const ProductList = () => {
    return (
      <div className='space-y-4'>
        <h3 className='font-bold text-3xl'>All Products</h3>
        {productData.length === 0 && <NoResults />}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {productData.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductList;
  