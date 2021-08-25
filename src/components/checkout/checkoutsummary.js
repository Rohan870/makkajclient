import React from "react";
import "./checkout.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import getSymbolFromCurrency from "currency-symbol-map";

const Checkoutbox = () => {
  const prices = useSelector((state) => state.priceList);
  const { price } = prices;
  const subtotal = useSelector((state) => state.subtotal);
  const { sub } = subtotal;

  return (
    <>
      <div className="checkout-box">
        <div className="checkout-box1">
          <div className="checkout-summary-head">
            <h1>Summary</h1>
          </div>
          <div className="checkout-summary">
            <summary>Estimate Shipping and Tax</summary>
          </div>
        </div>
        <div className="checkout-box2">
          <div className="subtotal">
            <div>Subtotal</div>
            <div>
              {getSymbolFromCurrency(price)} {sub}
            </div>
          </div>
          <div className="shipping">
            <div>Shipping (Standard Delivery - Shipping Rate)</div>
            <div>{getSymbolFromCurrency(price)} 20.00</div>
          </div>
          <div className="ordertotal">
            <div>Order Total</div>
            <div>
              {getSymbolFromCurrency(price)} {sub + 20}
            </div>
          </div>
        </div>
        <div className="checkout-box3">
          <Link to="/checkout"><button onClick={()=>{
            localStorage.setItem("total",sub)
          }}>proceed to checkout</button></Link>
        </div>
      </div>
    </>
  );
};

export default Checkoutbox;
