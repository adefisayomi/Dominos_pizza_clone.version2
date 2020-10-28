import React, { useEffect, useState } from "react";
import { menuNav } from "../Navigation"
import Footer from "../Footer"
import Header from "../Header";
import "./menuItems.css"
import MenuHeader from "./MenuHeader";
import {UseStateValue} from "../contexts/StateProvider"
import AsideMenu from "./AsideMenu"
import MenuList from "./MenuList";

const ItemsMenu = ({ match }) => {
  // useState Provider========================
  const {user} = UseStateValue()


  // submenu state ============================
  const submenu = "show"
// --------------------------------------------

// menu items state ===========================
const [menuItems, setMenuItems] = useState([]);
const [headerTag, setHeaderTag] = useState('')
// --------------------------------------------

// initiate fdatabase query =====================
useEffect(() => {

  fetchDataById();

}, [match]);

const fetchDataById = async () => {
  try {
    const data = await fetch(
      `https://us-central1-dominos-pizza-clone.cloudfunctions.net/menu/${match.params.id}`
    );
    const items = await data.json();

    // set states --------------------
    setHeaderTag(items.menu.name)
    setMenuItems(items.menu.category);

  } catch (error) {
    console.log({ message: error });
  }
};
// --------------------------------------------

  return (

    <div className="menuItems__wrapper">
      <Header navs={menuNav} submenu = {submenu}/>

      <div className="menuItems">
          <div className="menuMain">
        <MenuHeader 
        headerTag = {headerTag}
        
        />
        <div className="menuItems__main">

          {menuItems.map(items => (
            
            <>
              <div className="menuItems__header">
                <span>{items.header}</span>
                <span>PRICING AVAILABLE WHEN ORDERING</span>

              </div>

              <div className="__foodContainer">

                {items.items.map(item => (
                  <>
                  <MenuList  title = {item.title} image = {item.url} subtitle = {item.subtitle} price = {item.price} header = {items.header} />
                  </>
                ))}
              </div>
                    
            </>

          ))}
        </div>
      </div>

      {user ? <AsideMenu /> : false}
      </div>
      
      <Footer />
    </div>
  );
};
export default ItemsMenu;
