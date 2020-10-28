import React, { useState, useEffect } from 'react'
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom"
import "./styles/header.css"
import Signin from "./users/Signin"
import { SignoutUser } from "../components/users/User"
import Cart from "./cart/Cart"
import {UseStateValue} from "./contexts/StateProvider" 

function Header({navs, submenu, match}) {

// ref to basket, user and quantity of item in the basket================
const {basket, user} = UseStateValue()
let quantity = 0
basket.forEach(item => {
quantity += parseInt(item.quantity)
})
// ------------------------------------
    
  // menu submenuNav state ============
  const [submenuNav, setSubmenuNav] = useState([]);
// -------------------------------------

  // fetch sub menu nav ID and Name =================
  useEffect(() => {

    fetchId();

  }, []);

  const fetchId = async () => {
    try {
      const data = await fetch(
        "https://us-central1-dominos-pizza-clone.cloudfunctions.net/menu"
      );
      const res = await data.json();
      setSubmenuNav(res);
    } catch (error) {
      console.log({ message: error });
    }
  };
// ------------------------------------------------

    // handle signin modal ====================
    const [signin, setSignin] = useState("none");

    const openSignin = () => {
        setSignin("");
    };
    const closeSignin = () => {
        setSignin("none");
    };
    // ------------------------------------------

     // handle cart modal ====================================
    const [open, setOpen] = useState(false);

    const openCart = () => {
    setOpen((prev) => !prev);
    };
    const closeCart = () => {
    setOpen(false);
    };
// -----------------------------------------------------------

    return (
        <div className = "header__wrapper">
            <div className="header">
                <div className = "hams"><MenuOpenIcon className = "hamburgerMenu" style = {{display : 'none'}}/></div>
               
                <div className="header__menu">
                
                    <Link to = "/">
                <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/1200px-Domino%27s_pizza_logo.svg.png" alt="logo" className = "headerLogo" />
                    </Link>
                    <ul>
                        {navs.map(nav => (
                              <Link to = {nav.path} className = "headerLink Link"><li>{nav.name}</li></Link>
                        ))}
                    </ul>
                </div>

                <div className="header__signin">
                    <Link className = "Link" onClick = {user ? SignoutUser :  openSignin }><PersonOutlineIcon className = "material headerAvater"/></Link>
                        <p><Link className = "Link" onClick = {user ? SignoutUser :  openSignin } ><span className = "headerSpan">{user ? <p className = "user">{'Hello ' + user.firstName}</p>  : 'SIGN IN'}</span></Link></p>
                    <Signin showModal = {signin} close = {closeSignin} />
                </div>
                <div className="header__cart">
                    <Link to = "#" className = "Link cartResponsive" onClick = {openCart}>
                        <Badge
                        badgeContent= {basket != '' ? quantity : "0" }
                        color="secondary"
                        overlap="circle"
                        >
                            <ShoppingCartOutlinedIcon className = "material "/>
                        </Badge></Link>
                        <Link><span className = "headerSpan" onClick = {openCart}>CART</span></Link>
                        <Cart show = {open} close = {closeCart}/>
                </div>

            </div>

            {/* sub header================= */}
            <div className="header__sub" style = {{display : submenu ? "" : "none" }}>
                <div className="header__subMenu">
                    <div className="submenu">
                    <ul className="submenu__ul">
                    <Link className="submenu__link" to="/menu">
                        <li className="submenu__li">SEE ALL</li>
                    </Link>
                    {submenuNav.map(nav => (
                        <Link className="submenu__link" to = {`/menu/${nav.id}`}>
                        <li className="submenu__li">{nav.data.name}</li>
                        </Link>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
            {/* sub header================= */}
        </div>
    )
}

export default Header
