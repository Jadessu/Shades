import React from "react";

import { commerce } from "../../../../../lib/commerce";
import { useState, useEffect } from "react"
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

     function truncate(str, n) {
       return str?.length > n ? str.substr(0, n - 1) + "..." : str;
     }

  return (
    <div>
      <main className="popular-product-listing wrapper">
        <h2>BEST SELLERS</h2>
        <div className="popular-product-row">
          {/* <h1>I am popular fetch</h1> */}
          {popularProducts.map((product) => (
            <div className="popular-shop-card">
              <div className="popular-title">
                <h4>{product.name}</h4>
              </div>
              <div className="popular-desc">
                <p
                  dangerouslySetInnerHTML={{
                    __html: truncate(product.description, 25),
                  }}
                />
              </div>
              <div className="popular-image">
                <img src={product.image.url} alt={product.name} />
              </div>

              <div className="popular-cta">
                <div className="popular-price">
                  
                  {product.price.formatted_with_symbol}
                </div>
                <button
                  className="popular-btn"
                  onClick={() => onAddToCart(product.id, 1)}
                >
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
