import React from "react"
import Product from "./Product/Product";
import "./Products.css"

function Products({ products, onAddToCart}) {
    return (
        <main className="product-listing wrapper">
            <div className = "product-row">
                {products.map((product) => (
                    <div item key={product.id} className="col-1" >
                       
                        <Product product={product} onAddToCart={onAddToCart}/>
                        </div>
                ))}
           </div>
        </main>
    )
}

export default Products
