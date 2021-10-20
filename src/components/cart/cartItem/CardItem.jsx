import React from 'react'
import "./CardItem.css"

function CardItem({ item}) {
  console.log(item)
    return (
      <div>
        <div className="cart-item">
          <div className="cart-buttons">
            <span className="delete-btn"></span>
          </div>

          <div className="cart-image">
            <img src={item.image.url} alt={item.name} />
          </div>

          <div className="cart-description">
            <span>
              <p> {item.name} </p>
            </span>
          </div>

          <div className="cart-quantity">
            <button className="plus-btn" type="button" name="button">
              <img
                src="https://designmodo.com/demo/shopping-cart/plus.svg"
                alt=""
              />
            </button>
            <input type="text" name="name" value={item.quantity} />
            <button className="minus-btn" type="button" name="button">
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
