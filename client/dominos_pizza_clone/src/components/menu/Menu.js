import React, { useEffect } from "react";
import { menuNav } from "../Navigation";
import "./menu.css";
import Header from "../Header";
import Footer from "../Footer";
import MenuHeader from "./MenuHeader"
import Category from "./Category"
import AsideMenu from "./AsideMenu";
import { UseStateValue } from "../contexts/StateProvider"

function Menu() {

const {user, guest} = UseStateValue()

    const submenu = "show"
  useEffect(() => {
    document.title = "Domino's Pizza Nigeria| Menu";
    
  }, []);

  return (
    <div className="menu__wrapper">
      <Header navs = {menuNav} submenu = {submenu} />

 {/* main menu section ------------------------- */}
      <div className="menu">

          {/* menu category ============= */}

          <div className="menu__cat">

          {/* menu header ============== */}
          <MenuHeader 
          headerTag ="DOMINOS'S NATIONAL MENU"
          subTag ="This is the Domino's national menu. To see prices, coupons and exactly
          what items are available to you, "
          linkTag ="select your local store."
          />
            <Category />
            
          </div>

          {/* menu aside section------------------------- */}
          {user ? <AsideMenu /> : false}
      </div>
      <Footer />
    </div>
  );
}

export default Menu
