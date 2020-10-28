import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import Header from "../Header";
import Footer from "../Footer";
import { homeNav } from "../Navigation";
import "./deals.css";
function Deals() {

  useEffect(() => {
    document.title = "Domino's Pizza Nigeria | Deals";
  }, []);
  
  return (
    <div className="deals__wrapper">
      <Header navs={homeNav} />
      <div className="deals">
        <h1>
          Choose from the best Domino’s pizza coupons, promo codes and offers
          below.
        </h1>
        <div className="deals__couponBanner">
          <h1>DOMINO'S LOCAL COUPON</h1>
          <div className="deals__coupon">
            <p>
              Find your local Domino’s Pizza restaurant to see your current
              local pizza coupon promos and deals.
            </p>
            <button>SEE LOCAL COUPONS</button>
          </div>
        </div>
        <div className="deals__couponBanner">
          <h1>DOMINO'S LOCAL COUPON</h1>
          <div className="deals__imageCoupon">
            <Link className = "deals__imageLink">
              <img
                src="https://cache.dominos.com/wam/prod/market/NG/_en/images/promo/3ec1ce2f-890b-4726-85cd-cc1e867b143b.jpg"
                alt=""
              />
              <img
                src="https://cache.dominos.com/wam/prod/market/NG/_en/images/promo/5950c9d9-5ea3-4ffd-b8ed-a257d0165a8e.jpg"
                alt=""
              />
              <img
                src="https://cache.dominos.com/wam/prod/market/NG/_en/images/promo/e37f1657-b9b0-43b4-83ba-9035dfd092b3.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Deals;
