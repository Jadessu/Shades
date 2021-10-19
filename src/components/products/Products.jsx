import React from "react"
import {Grid} from "@material-ui/core"
import Product from "./Product/Product";
import "./Products.css"

function Products({ products}) {
    return (
        <main className="product-listing wrapper">
            <div className = "row">
                {products.map((product) => (
                    <div item key={product.id} className="col-1" >
                       
                        <Product product={product}/>
                        </div>
                ))}
           </div>
        </main>
    )
}

export default Products
