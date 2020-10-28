import React from 'react'
import ClearIcon from "@material-ui/icons/Clear";
import "./cart.css"
import { UseStateValue } from "../contexts/StateProvider"
import Available from './Available';
import Empty from './Empty';
const Cart = ({show, close}) => {
  
// ref to useState value
const {basket} = UseStateValue()
    return (
        <>
            {show && (
                
              <div className="cart">
                <div className="cart__header">
                  <h1>YOUR CART</h1>
                  <button onClick={close}>
                    <ClearIcon className="cart__closebtn" />
                  </button>
                </div>
              {basket != '' ?  <Available /> : <Empty closeCart = {close}/>}
                
              </div>
            )}
        </>
    )
}

export default Cart