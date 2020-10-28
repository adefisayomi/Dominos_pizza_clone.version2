import React, { useState, memo } from "react"
import uuid from "uuid/v1"
import { useHistory, Link } from "react-router-dom"
import { UseStateValue } from "../contexts/StateProvider"
import Order from "../cart/Order"
import "./menulist.css"


const MenuList = ({title, image, subtitle, price, header}) => {
    const id = uuid()
    const history = useHistory()

    // reference to dispatcher function ------------
    const {user} = UseStateValue()

// open and close order modal ================
 const [modal, setModal] = useState("none")
 const openOrderModal = () => {
    setModal("")
 }

const closeOrderModal = () => {
    setModal("none")
    }
    return (
             <div className="menulist" >
                    <Link onClick = {user ? openOrderModal : () => history.push("/store/location")} ><img src={image} alt="" className = "menulist__Image" /></Link>
                    <button onClick = {openOrderModal}>ORDER NOW</button>
                    <span><Link className = "menulistLink" onClick = {openOrderModal}>{title}</Link></span>
                {user ? <div><p>{subtitle}</p> <p>starting @{price}</p> </div>: false }
                
                <Order display = {modal} close = {closeOrderModal}  title = {title} image = {image} subtitle = {subtitle} price = {price} header = {header} id = {id}/>
                
                  </div>
    )
}

export default memo(MenuList) 