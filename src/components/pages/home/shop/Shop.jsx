import React from 'react'
import  Products  from '../../../Products/Products'
import Banner from './Banner'

function Shop({products, onAddToCart, forSale}) {
    
    return (
      <div>
       
        <Banner forSale={forSale[0]}/>
        <Products products={products} onAddToCart={onAddToCart} />
      </div>
    );
}

export default Shop
