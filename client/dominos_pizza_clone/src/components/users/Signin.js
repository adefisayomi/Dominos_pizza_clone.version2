import React, { useState } from 'react'
import "./signin.css"
import { Link } from "react-router-dom"
import ClearIcon from "@material-ui/icons/Clear";
import { SigninUser } from "./User"

const Signin = ({showModal, close}) => {

  // user state
  const [user, setUser] = useState({email : '', password : ''})

  // get user function
  const getUser = (e) => {
    setUser({...user,[e.target.name] : e.target.value })
  }
  // handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await SigninUser({email : user.email, password : user.password})
    console.log(res)
    close()
  }
   
    return (
    <div className="signin__wrapper" style={{ display: showModal }}>
<div className="signin">
  <div className="signin__header">
    <span>SIGN IN TO YOUR PIZZA PROFILE</span>
    <button onClick = {close}>
      <ClearIcon className="header__closeIcon" />
    </button>
  </div>
  <div className="signin__body">
    <form onSubmit = { handleSubmit }>
      <p>
        Don't have one? <Link to = "/signup" className = "signupLink">CREATE ONE ➤</Link>
      </p>
      <label>Email</label>
      <input type="text" name = "email" value = {user.email} onChange = {getUser} />
      <label>Password</label>
      <input type="password" name = "password" value = {user.password} onChange = {getUser}/>
      <p>
        <Link to="/" className="resetPassword">
          FORGOT PASSWORD?
        </Link>
      </p>
      <div className="signin__button">
        <button className="signin__button1" onClick = {handleSubmit}>
          SIGN IN FOR THIS ORDER
        </button>
        <button className="signin__button2" onClick = {handleSubmit}>
          SIGN IN & KEEP ME SIGNED IN
        </button>
      </div>
      <p className="securedOrder">
        Securely access your recent orders, saved locations, and payment
        methods.
      </p>
    </form>
  </div>
</div>
</div>)
}

export default Signin