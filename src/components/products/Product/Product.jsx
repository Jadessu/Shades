import React from 'react'
// import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core"
import "./Product.css"


function Product({ product, onAddToCart}) {


    return (
        <div className="product">
            <div className="image-wrapper">
                <img src={product.image.url} alt={product.name} />
            </div>
            <div className="info">
                <div className="title"> {product.name}</div>
                <div className="description"> <p dangerouslySetInnerHTML={{__html: product.description}}/>
                
                </div>
                <div className="price">{product.price.formatted_with_symbol}</div>
            </div>
            <div className="actions-wrapper">
                <button onClick={onAddToCart}>Add to Cart</button>
                
            </div>









           

            
        </div>
    )
}

export default Product
