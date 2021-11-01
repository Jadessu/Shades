import React, {useState} from 'react'
// import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core"
import "./Product.css"
import Modal from "react-modal"

function Product({ product, onAddToCart}) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

      function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }



      console.log("this is product",product)
    return (
      <div className="product">
        <div className="image-wrapper" onClick={() => setModalIsOpen(true)}>
          <img src={product.image.url} alt={product.name} />
        </div>
        <div className="info">
          <div className="title"> {truncate(product.name, 29)}</div>

          <div className="price">{product.price.formatted_with_symbol}</div>
        </div>
        <div className="actions-wrapper">
          <button
            className="add-to-cart-button "
            onClick={() => onAddToCart(product.id, 1)}
          >
          Add to Cart
          </button>

          <Modal
            onRequestClose={() => setModalIsOpen(false)}
            isOpen={modalIsOpen}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0,0,0.8)",
              },
              content: {
                width: "600px",
                minHeight: "800px",

                boxShadow: "0 5px 16px rgba(0, 0, 0, 0,2)",
                background: "#fff",
                color: "#000",
                
                position: "absolute",
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
              },
            }}
          >
            <div className="modal-contents">
              <div className="modal-product-image">
                <img src={product.image.url} alt={product.name} />
              </div>
              <div className="modal-title">
                <span className="modal-product-name">{product.name} - </span>
                <span className="modal-product-price">
                  {product.price.formatted_with_symbol}
                </span>
              </div>
              <div className="modal-product-description">
                <p dangerouslySetInnerHTML={{ __html: product.description }} />
              </div>
              <div className="modal-product-actions">
                <button
                  className="close-button"
                  onClick={() => setModalIsOpen(false)}
                >
                  Close
                </button>
                <button
                  className="modal-button"
                  onClick={() => onAddToCart(product.id, 1)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
}

export default Product
