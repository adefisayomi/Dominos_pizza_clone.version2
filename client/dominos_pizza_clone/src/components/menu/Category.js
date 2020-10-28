import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./category.css"
const MenuCategory = () => {

  // menu category state ------------
  const [cat, setCat] = useState([]);

  // initiate fetch data -----------------
  useEffect(() => {
    fetchData();
  }, []);

  // fetch data from the api
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://us-central1-dominos-pizza-clone.cloudfunctions.net/menu"
      );
      const items = await data.json();
      setCat(items);
    } catch (error) {
      console.log({ message: error });
    }
  };

  return (
    <div className="category__wrapper">
      <div className="category">

        {/* dynamic content */}
        {cat.map((item) => (
          <Link to={`/menu/${item.id}`} className="CategoryLink">
            <div className = "categoryDiv">
              <img src={item.data.image} alt="menu-images" />
              {item.data.name}
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default MenuCategory;
