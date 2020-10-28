import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import "./delivery.css"
import {SignupUser} from "../users/User"

export const Delivery = ({display}) => {

  const history = useHistory()

  const [address, setAddress] = useState({})
// guest user info==================
  const userInfo = {
    address : address,
    firstName : 'Guest'
}
  const getAddress = (e) => {
      setAddress({...address, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    SignupUser({userInfo})
    history.push('/menu')
  }

    return (
            <div className="delivery" style = {{display : display}}>
      
      <form onSubmit = {handleSubmit}>
          <label>Address Type:
            <select name="addressType"  onChange = {getAddress} >
              <option value="House" selected>House</option>
              <option value="Apartment">Apartment</option>
              <option value="Apartment">Container</option>
              <option value="Apartment">Under-Bridge</option>
            </select>
            </label>
            <label>City:
            <select name="city"  onChange = {getAddress} >
            <option value="Lagos">Ibadan</option>
            <option value="Lagos">Ney-York</option>
            <option value="Lagos">Los-Angeles</option>
              <option value="Lagos" selected>Lagos</option>
              <option value="Abeokuta">Abeokuta</option>
            </select>
            </label>
            <label>Street Number <input type="number"  name="streetNumber" onChange = {getAddress} /></label>
          
            <label>Street Name: <input type="text" name="streetName"  onChange = {getAddress} /> </label>
            <textarea type="text" name="deliveryNote" placeholder = "Delivery Note..."  onChange = {getAddress} ></textarea>
            <label name = "deliveryExample">Example: Gate code, ring the door bell, etc.</label>
            <button type = "submit">CONTINUE</button>
        </form>

    </div>
    )

}