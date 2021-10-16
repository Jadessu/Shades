import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core"
import "./Product.css"


function Product({ product}) {
    return (
        <div className="product">
            <div className="image-wrapper">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="info">
                <div className="title"> {product.name}</div>
                <div className="description"> {product.description}</div>
                <div className="price">{product.price}</div>
            </div>
            <div className="actions-wrapper">
                <button>Add to Cart</button>
                
            </div>









           

            
        </div>
    )
}

export default Product
