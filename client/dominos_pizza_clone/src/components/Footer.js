import React, { useState } from 'react'
import { Link } from "react-router-dom";
import FooterModal from "./FooterModal"
import uuid from "uuid/v1";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { footerNav } from "./Navigation";
import ClearIcon from "@material-ui/icons/Clear";
import "./styles/footer.css";


function Footer() {

// modal state
const [state, setState] = useState("none")

const handleOpen = () => {
  setState("")
}
const handleClose = () => {
  setState("none")
}





    return (
        <div className = "footer__wrapper">
        <div className="footer">
        <ul>
          {footerNav.map((nav, index) => (
            <Link key = {index} to={nav.path} className="footerLink">
              <li key = {index} >{nav.name}</li>
            </Link>
          ))}
        </ul>
        <div className="footer__banner">
          <div>
            <Link to="/" className="footerSocialLink">
              <FacebookIcon />
            </Link>
            <Link to="/" className="footerSocialLink">
              <TwitterIcon />
            </Link>
          </div>
          <img
            src="https://cache.dominos.com/olo/6_36_7/assets/build/market/NG/_en/images/img/footer-links/interswitch.png"
            alt="footerImage"
            className="footer__image"
          />
        </div>
        <div className="footer__deliveryNote">
          <p>
            Delivery Guarantee: A minimum order of <strong>N3000</strong> is
            required to qualify for free delivery. FREE delivery applies to
            predetermined areas around each Domino’s outlet. Please ask your
            closest Domino’s Pizza outlet if you fall within their specified
            delivery area. Our Delivery Experts are not penalized for late
            deliveries.
            <Link to="/" className="footer__modalLink" onClick = {handleOpen}>
              Click here for more information.
            </Link>
          </p>
          <p>
            The hours of operation may vary by store. Valid for the Delivery
            Service and Carry-Out of Domino's Pizza Nigeria stores. Domino´s
            Pizza reserves the right to make unannounced price changes. Our
            delivery experts provide change up to N7500. Please note that checks
            or bank transfers, are not accepted as payment method. The data
            provided by customers will be included in the user and promotional
            database, owned by Eat N Go Ltd. Prices include VAT & other Taxes.
          </p>
        </div>
      </div>
      <FooterModal close = {handleClose} state = {state}/>
        </div>
    )
}

export default Footer
