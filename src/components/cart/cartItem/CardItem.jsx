import React from 'react'
import "./CardItem.css"

function CardItem({ item, onUpdateCartQty, onRemoveFromCart}) {
    return (
      <div>
        <div className="cart-item">
          <div className="cart-buttons">
            <span
              className="delete-btn"
              onClick={() => onRemoveFromCart(item.id)}
            ></span>
          </div>

          <div className="cart-image-container">
            <img
              className="cart-item-image"
              src={item.image.url}
              alt={item.name}
              width="60px"
            />
          
          </div>

          <div className="cart-description">
            <span>
              <p> {item.name} </p>
            </span>
          </div>

          <div className="cart-quantity">
            <button
              className="plus-btn"
              type="button"
              name="button"
              onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
            >
              <img
                src="https://designmodo.com/demo/shopping-cart/plus.svg"
                alt=""
              />
            </button>
            <input type="text" name="name" value={item.quantity} />
            <button
              className="minus-btn"
              type="button"
              name="button"
              onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
            >
              <img
                src="https://designmodo.com/demo/shopping-cart/minus.svg"
                alt=""
              />
            </button>
          </div>

          <div className="cart-total-price">
            {item.line_total.formatted_with_symbol}
          </div>
        </div>
      </div>
    );
}

export default CardItem
