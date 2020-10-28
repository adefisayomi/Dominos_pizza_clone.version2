import React from 'react'
import "./empty.css"
function Empty({closeCart}) {
    return (
        <div className = "empty">
            <p>
            Your cart is currently empty, but your stomach doesn't have to be. Add some items and come back here to checkout.
            </p>
            <button onClick = {closeCart}>CONTINUE SHOPPING</button>
        </div>
    )
}

export default Empty
