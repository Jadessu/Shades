import React from 'react'
import CardItem from './cartItem/CardItem'
function Cart( { cart}) {
   

    const EmptyCart = () => (
        <h1>You have no items in your shopping cart</h1>
    )
    const FilledCart = () => (
        <>
               
            {cart.line_items.map( (item) => (
                <div className="shopping-cart">
                   <CardItem item={item}/>
                </div>
            ))}
                <div className="cardDetails">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                    <div>
                        <button>Empty Cart</button>
                        <button>Checkout</button>
                    </div>
                </div>
               
        </>
    )

    if(!cart.line_items) return "...Loading"
    return (
      <div className="cart-wrapper">
        <div class="heading ">
          <h1>My Cart</h1>
          <a href="#" class="continue">
            Continue Shopping
          </a>
        </div>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        
      </div>
    );
}

export default Cart
