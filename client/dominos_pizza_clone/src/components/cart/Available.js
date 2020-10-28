import React from 'react'
import { useHistory } from "react-router-dom"
import IndividualItem from "./IndividualItem"
import "./available.css"
import { UseStateValue } from "../contexts/StateProvider"

function Available() {
const history = useHistory()

const handleCheckout = (e) => {
  e.preventDefault()
  history.push("/checkout")
}
// ref to useState value ==================
const {basket} = UseStateValue()
let subTotal = 0
basket.forEach(item => {
  
  const totalPrice = item.price * parseInt(item.quantity)
  subTotal += totalPrice

  // const check = Array.from(totalPrice)
  // if(check.length > 3 && check.length < 5){
  //   check.splice(1, 0, ",")
  //   subTotal = check
  // } else if(check.length >= 5){
  //   check.splice(2, 0, ",")
  //   subTotal += check
  // }
  
})

// --------------------------------

    return (
        <div className="available">
            {basket.map(item => (
                <>
                 <IndividualItem image = {item.image} title = {item.title} price = {item.price} quantity = {item.quantity} id = {item.id}/>
                </>
            ))}
           
                <div className="available__footer">
            <p>Subtotal: <span>₦{subTotal}</span></p>
                  <button onClick = {handleCheckout}>GO TO CHECKOUT</button>
                </div>
              </div>
    )
}

export default Available
