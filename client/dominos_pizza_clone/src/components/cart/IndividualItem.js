import React, { useState } from 'react'
import "./individualItem.css"
import { UseStateValue } from "../contexts/StateProvider"

const IndividualItem = ({image, title, price, quantity, id, header}) => {
// ===========================================
const {dispatch} = UseStateValue()


// EDIT ORDER --------------------------------------
const editOrder = () => {
  dispatch({type : 'edit-order', payload : {
    image,
    title,
    id,
    price,
    quantity,
    header
  }})
}

// REMOVE ITEM FROM BASKET -------------------------
const removeOrder = () => {
  dispatch({type : 'remove-order', payload : {
    id
  }})
}

// UPDATE BASKET QUANTITY---------------------------
const updateQuantity = (e) => {
  dispatch({type : 'update-quantity', payload : {
    id, quantity : e.target.value
  }})
}

    return (
      
<div className="individual__main">
                    <div className="individual__item">
                      <img src= {image} alt="cart-image"/>
                      <h1>{title}</h1>
                       <p>{price}</p>
                    </div>
                    <div className = "individual__editable">
                      <label>Quantity:
                        <select  defaultValue = {quantity} onChange = {updateQuantity}>
                        <option value="1" >1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                        </select>
                      </label>
                      <button onClick = {editOrder} disabled>Edit</button><button onClick = {removeOrder}>Remove</button>
                    </div>
                    
                    
    </div>
    
    )
}

export default IndividualItem