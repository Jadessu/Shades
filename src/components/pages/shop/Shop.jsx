import React from 'react'
import Products from "../../Products/Products"
import Banner from './Banner'

function Shop({products, onAddToCart, forSale}) {
    
    return (
      <div>
       
        <Banner forSale={forSale[0]}/>
        <div className="title">
          <h2>All Products</h2>
        </div>
        <Products products={products} onAddToCart={onAddToCart} />
      </div>
    );
}

export default Shop
