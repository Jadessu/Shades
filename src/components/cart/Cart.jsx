import React from 'react'

function Cart( { cart}) {
    const isEmpty = !cart.line_items.length
    console.log(isEmpty)

    const EmptyCart = () => (
        <h1>You have no items in your shopping cart</h1>
    )
    const FilledCart = () => (
        <>
            {cart.line_items.map( (item) => (
                <div>
                    {/* <CartItem/> */}
                    {item.name}
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
        <div>
            <h1> YOUR SHOPPING CART</h1>
            { isEmpty ? <EmptyCart/> : <FilledCart/>}
        </div>
    )
}

export default Cart
