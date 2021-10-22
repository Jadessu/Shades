import React from "react";
import { Products } from "./components";
import { commerce } from "./lib/commerce";
import { useState, useEffect } from "react";
import Cart from "./components/cart/Cart";
import { FairSkin, name } from "./requests";
import Product from "./components/Products/Product/Product";
import wallpaper from "./wallpaper/wallpaper.jpg"

function CategoryFetch({ fetchUrl, onAddToCart }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await fetchUrl;
    console.log("this", data);
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
