import React from "react";
import { Products } from "../../..";
import { commerce } from "../../../../lib/commerce";
import { useState, useEffect } from "react";
import Cart from "../../../cart/Cart";
import { FairSkin, name } from "../../../../requests";
import Product from "../../../Products/Product/Product";
import "./PopularFetch.css"

function PopularFetch({ fetchUrl, onAddToCart}) {
  const [popularProducts, setPopularProducts] = useState([]);

    const fetchProducts = async () => {
      const { data } = await commerce.products.list();
      setPopularProducts(data.slice(5, 8));
    };

    useEffect(() => {
      fetchProducts();
    }, []);


  return (
    <div>
      <main className="popular-product-listing wrapper">
        <div className="popular-product-row">
          {/* <h1>I am popular fetch</h1> */}
          {popularProducts.map((product) => (
            <div className="popular-shop-card">
              <div className="popular-title">{product.name}</div>
              <div className="popular-desc">Men's training shoe</div>
              <div className="popular-image">
                
                  <img src={product.image.url} alt={product.name}  />
               
              </div>

              <div className="popular-cta">
                <div className="popular-price">$130</div>
                <button className="popular-btn">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default PopularFetch;
