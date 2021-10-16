import React from "react"
import {Grid} from "@material-ui/core"
import Product from "./Product/Product";
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
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                        </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
