import React, { useState,memo } from 'react'
import { Link } from "react-router-dom"
import "./order.css"
import ClearIcon from "@material-ui/icons/Clear";
import { UseStateValue } from "../contexts/StateProvider"
function Order({display, close, title, image, subtitle, price, header, id}) {
// set quantity ===========================
const [quantity, setQuantity] = useState(1)

// useState Provider========================
  const {dispatch} = UseStateValue()

// ------------------------------------------------
const addToBasket = () => {
    dispatch({type : 'place-order', payload : {
        image,
        title,
        subtitle,
        quantity,
        id,
        price
    }})
    close()
}

    return (
        <div className = "order" style = {{display : display}}>
            <div className="order__container">
                <div className="order__header">
    <h1>{title}</h1>
                    <button onClick = {close}><ClearIcon /></button>
                </div>
                <div className="order__main">
                    <img src= {image} alt="orderImg"/>
                    <div>
                        <h1>SERVING OPTIONS</h1>
                        <label><input type="text" readOnly value = "CHOICE"/></label>
                        <label>{header} <input type="radio" checked/></label>
                        <div>
                            <Link className = "orderLink" onClick = {close}>CANCEL</Link>
                            <label>Quantity:
                            <select defaultValue = '1'  onChange = {e => setQuantity(e.target.value)} >
                            <option value="1">1</option>
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
                            <button onClick = {addToBasket}>ADD TO ORDER</button>
                        </div>
                    </div>
                </div>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default memo(Order)
