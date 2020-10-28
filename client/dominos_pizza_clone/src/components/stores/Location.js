import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import MenuHeader from "../menu/MenuHeader";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import {locationNav} from "../Navigation" 
import {Delivery} from "./deliveryForm"
import "./location.css";
const Location = () => {

  // setting display of form
  const [display, setDisplay] = useState("none")
  const Display = () => {
    if(display === "none"){
      setDisplay("")
    }else{setDisplay("none")}
  }

  return (
    <div className="location__wrapper">
      <Header navs={locationNav} />
      <div className="location">
        <MenuHeader headerTag="SELECT YOUR LOCAL STORE" />
        {/* ---------------------------- */}
        <div className="location__form">
          <h1>IS THIS ORDER FOR DELIVERY OR CARRYOUT?</h1>
          <div className="">
            <Link to="#" className="location__links" onClick = {Display}>
            <div className="location__delivery">
              <DirectionsBikeIcon className="location__icon" />
              <span>DELIVERY</span>
            </div>
          </Link>
          
            <div className="location__deliveryMiddle">
              <span>-OR-</span>
            </div>
         
          <Link to="#" className="location__links">
            <div className="location__delivery">
              <DirectionsWalkIcon className="location__icon" />
              <span>CARRYOUT</span>
            </div>
          </Link>
          </div>
          <Delivery display = {display}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Location;
