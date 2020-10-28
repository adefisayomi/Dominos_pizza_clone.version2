import React from 'react'
import "./checkout.css"
import { useHistory, Redirect } from "react-router-dom"
import { UseStateValue } from "../contexts/StateProvider"
import ProcessCheckout from './ProcessCheckout'
function Checkout() {
    const history = useHistory()
    // ref to state provider
    const {user, basket} = UseStateValue()

    return (
        <div>
            {user && basket != '' ? <ProcessCheckout /> :  <Redirect to = "/menu" />}
        </div>
    )
}

export default Checkout
