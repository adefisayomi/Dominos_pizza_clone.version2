import React from "react";
import { Link } from "react-router-dom";
import "./menuHeader.css"

const MenuHeader = ({ headerTag, subTag, linkTag }) => {
  return (
    <div className="menuHeader">
      <h1>{headerTag}</h1>
      <p>
        {subTag} <Link className = "menuHeaderLink">{linkTag}</Link>
      </p>
    </div>
  );
};

export default MenuHeader;
