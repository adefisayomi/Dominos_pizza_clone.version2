import React, { useEffect, useState, Fragment } from "react";
// import {db} from "../firebase/Config"
import { Link } from "react-router-dom";
import { storeNav } from "../Navigation";
import Header from "../Header";
import Footer from "../Footer";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import "./store.css";
import MenuHeader from "../menu/MenuHeader";
import { db } from "../firebase/Config"
function Store() {

// state of the store
const [store, setStore] = useState([])

// database invocation
const getStoreAdd = async () => {
  const array = []
  db.collection('store').onSnapshot(snap => {
    snap.docs.forEach(data => {
    const add = data.data()
    array.push(add)
      return array
    })
    setStore(array)
  })
  
}

// calling the database invocation function
useEffect(() => {
  getStoreAdd()
}, [])

  return (
    <div className="store__wrapper">
      <Header navs={storeNav} />
      <div className="store">
        <MenuHeader headerTag="SELECT YOUR LOCAL STORE" />
        {/* -------------------------------------- */}
        <div className="store__main">
          <div className="store__header">
            <span>STORES NEAR: NG</span>
            <span>
              Based on the location you provided <Link to = "/store/location">EDIT</Link>
            </span>
          </div>
          {/* header section ---- */}
         
          {store.map(add => (
                   <>
                  <div className="main__body">     
                 <div className="body__section1">
                  <h1>{add.city} (#{add.cityCode})</h1>
                  <p>{add.street}</p>
                   <p>NG {add.countryCode}</p>
                  <p>Tel: {add.phoneNumber}</p>
                </div> 
                <div className="body__section2">
                  <h1>DELIVERY HOURS</h1>
                  <p>Fr-We 9:00am-9:30pm</p>
                  <p>Th 10:00am-9:30pm</p>
                  <h1>CARRYOUT HOURS</h1>
                  <p>Fr-We 9:00am-9:30pm</p>
                  <p>Th 10:00am-9:30pm</p>
                </div>
                <div className="body__section3">
                  <h1>STORE DETAILS</h1>
                  <p>
                    <DirectionsBikeIcon className="store__icon" />
                    Delivery Store
                  </p>
                  <p>
                    <StoreMallDirectoryIcon className="store__icon" />
                    Carryout Store
                  </p>
                  <button>ORDER DELIVERY</button>
                  <button>ORDER CARRYOUT / PICKUP</button>
                </div>
           </div>  
      </>
       
          ))}
            
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Store;
