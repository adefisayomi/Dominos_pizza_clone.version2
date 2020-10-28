import React, { useState } from 'react'
import "./signup.css"
import Footer from "../Footer"
import Header from "../Header"
import { homeNav } from "../Navigation"
import {SignupUser} from "./User"
import { useHistory } from "react-router-dom"

function Signup() {
const history = useHistory()
    // customer Registration form state ================================= 
    const [customer, setCustomer] = useState(null)
    // ------------------------------------------------------

    // get form inputs =====================================
    const getForm = (e) => {
        setCustomer({...customer, [e.target.name] : e.target.value})
        
    }
    // -----------------------------------------------------

    // handle submit form =============================
    const handleSubmit = async (e) => {
        e.preventDefault()
        // get user datas 
        const userInfo = {
            firstName : customer.firstName,
            lastName : customer.lastName,
            email : customer.email,
            phoneNumber : customer.phoneNumber,
            address : { },
            orderHistory : []
        }
        // checking validity of email and password
        if (customer.email === customer.email2 && customer.password === customer.password2){

          const res = await SignupUser({email : customer.email, password : customer.password, userInfo : userInfo})
          console.log(res)
           history.push("/menu")
        
    }}
    // ----------------------------------------------------------


    return (
        <>
        <Header navs = {homeNav}/>
        <div className="signup">
            <div className="signup__banner"></div>
            <div className="signup__form">
                <form onSubmit = {handleSubmit}>
                    <p>*First Name: <input type="text" name = "firstName" required onChange = {getForm} /></p>
                    <p>*Last Name: <input type="text" name = "lastName" required onChange = {getForm} /></p>
                    <p>*Email Address: <input type="email" name = "email" required onChange = {getForm} /></p>
                    <p>*Confirm Email Address: <input type="text" name = "email2" required onChange = {getForm} /></p>
                    <p>*Primary Phone Number: <input type="tel" name = "phoneNumber" required placeholder="234-80-12345678" onChange = {getForm} /></p>
                    <p>*Password:<input type="password" name = "password" required onChange = {getForm} /></p>
                                    
                    <p>*Confirm Password: <input type="password" name = "password2" required onChange = {getForm} /></p>
                    <span><strong>Heads Up!</strong>Use at least 8 characters.</span>
                    <p><input type="checkbox"/> Yes. I would like to receive e-mail offers from Domino's Pizza</p>
                    <button>CREATE YOUR PROFILE</button>
                </form>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Signup
