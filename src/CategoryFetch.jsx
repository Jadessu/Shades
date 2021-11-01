import React from "react";
import { useState, useEffect } from "react";
import Product from "./components/Products/Product/Product";

function CategoryFetch({ fetchUrl, onAddToCart }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await fetchUrl;
    setProducts(data);
  };

  

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      
      <main className="product-listing wrapper">
        <div className="product-row">
          {products.map((product) => (
            <div item key={product.id} className="col-1">
              <Product product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default CategoryFetch;
