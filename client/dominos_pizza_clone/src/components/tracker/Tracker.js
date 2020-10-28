import React from "react";
import { Link } from "react-router-dom"
import "./tracker.css";
import Header from "../Header";
import Footer from "../Footer";
import { homeNav } from "../Navigation";

function Tracker() {



  return (
    <div className="tracker__wrapper">
      <Header navs={homeNav} />
      <div className="tracker">
        <div className="tracker__banner" />
        <h1>WANT TO KNOW WHAT'S HAPPENING WITH YOUR ORDER RIGHT NOW?</h1>
        <p>
          The delivery experts at Domino's have specifically engineered Domino's
          Tracker® to keep you up to date on the status of your order from the
          moment it's prepared to the second it leaves our store for delivery.
        </p>
        {/* form section ------ */}
        <form className="tracker__form">
          <h1>TRACK YOUR ORDER</h1>
          <label>Enter your phone number below</label>
          <p>*Phone#</p>
          <label>
            <input type="text" placeholder="Phone" />
            Ext.
            <input type="text" placeholder="Ext." />
          </label>
          <p>
            <input type="checkbox" />
            *Yes. I agree to the <Link to="#" className = "trackerLink">Terms of Use </Link>and I am 13 or
            older.
          </p>
          <button>TRACK YOUR ORDER</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Tracker;
