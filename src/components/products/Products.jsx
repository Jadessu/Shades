import React from "react"
import {Grid} from "@material-ui/core"
import Product from "./Product/Product";
import "./Product.css"
const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "$5",
    image:
      "http://cdn.shopify.com/s/files/1/0107/9820/2938/products/gmmobile1_grande.png?v=1629754332",
  },
  {
    id: 2,
    name: "Not Shoes",
    description: "Not Running shoes",
    price: "$10",
    image:
      "https://cdn.shopify.com/s/files/1/0107/9820/2938/products/bw1_mobile_800x800_crop_center.png?v=1625108430",
  },
];

function Products() {
    return (
        <main className="product-listing wrapper">
            
                {products.map((product) => (
                    <div item key={product.id} >
                       
                        <Product product={product}/>
                        </div>
                ))}
           
        </main>
    )
}

export default Products
