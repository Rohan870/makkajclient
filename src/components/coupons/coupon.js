import React from "react";
import "./coupons.css";

export const Coupon = () => {
  return (
    <div className="coupon-area">
      <p>Apply Gift Code</p>
      <input type="text" placeholder="Enter Gift Code"></input>
      <button type="submit">APPLY CODE</button>
    </div>
  );
};
