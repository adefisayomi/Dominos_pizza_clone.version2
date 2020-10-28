import React, { useState, useEffect } from 'react'
import "./asidemenu.css"
import { db } from "../firebase/Config"
import {UseStateValue} from "../contexts/StateProvider"
function AsideMenu({info}) {
// invoking database fro store info
const id  = "0SxtxAHPXjyZTyPvSmlv"
const [store, setStore] = useState({})
useEffect(() => {

    getStoreInfo()

},[])

// get store info 
const getStoreInfo = async () => {
const storeRef = await db.collection("store").doc(id).get()
const store = await storeRef.data()
setStore(store)
}

    return (
        <div className="aside" style = {{display : ""}}>
            <div className="aside__header">
                <h1>MY ORDER</h1>
                    <p>Awaiting your delicious selections.</p>
            </div>
            <div className="aside__main">
                <h1>ORDER SETTINGS</h1>
                <div className="">
                <h4>My store <a>CHANGE</a></h4>
    <p>{store.city} (#{store.cityCode})</p>
    <p>{store.street}</p>
    <p>{store.countryCode} ,NG</p>
    <p>{store.phoneNumber}</p>
        <h4>
            Service Method
        </h4>
        <p><input type="radio" name="servideMethod" defaultChecked value = "carryout" />Carryout</p>
        <p><input type="radio" name="servideMethod" value = "delivery"/>Delivery</p>
        <h4>
            Order Timing 
        </h4>
        <p><input type="radio" name="orderTiming" defaultChecked value = "now"/>Now</p>
        <p><input type="radio" name="orderTiming" value = "latter"/>Later</p>
        </div>
            </div>
    
        </div>
    )
}

export default AsideMenu
