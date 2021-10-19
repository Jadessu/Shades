import React from 'react'

function Cart( { cart}) {
    const isEmpty = !cart.line_items.length

    const EmptyCart = () => (
        <h1>You have no items in your shopping cart</h1>
    )
    const FilledCart = () => (
        <>
            {}
        </>
    )
    return (
        <div>
            <h1> YOUR SHOPPING CART</h1>
            { isEmpty ? <EmptyCart/> : <FilledCart/>}
        </div>
    )
}

export default Cart
