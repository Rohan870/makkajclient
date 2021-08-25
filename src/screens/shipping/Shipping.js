import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shippingaddressget } from "../../actions/orderaction";
import { Rightinfo } from "../../components/rightinfo/rightinfo";
import "./Shipping.css";
import { Link } from "react-router-dom";


export const Shipping = () => {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.shipping);
  const { address } = addresses;

  useEffect(() => {
    dispatch(
      shippingaddressget(JSON.parse(localStorage.getItem("userInfo")).user)
    );
  }, [dispatch]);

  return (
    <div className="shipping-page">
      <div className="shipping-top-info">
        <h3>SHIPPING</h3>
      </div>
      <div className="shipping-left-info">
        <div className="top-logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="bottom-section">
          <section className="inner-section">
            <p>Contact</p>
            <p>{address.email}</p>
            <p>change</p>
          </section>
          <section className="inner-section">
            <p>Ship To</p>
            <p>
              {address.adress}  {address.appertment} {address.city}
              {address.state} {address.country}{" "}
            </p>
            <p>change</p>
          </section>
        </div>
        <div className="last-section">
          <h2>Shipping method</h2>
          <Link to={'/payment'}>
            <button
              style={{
                width: "25%",
                padding: "1rem",
                margin: "1rem",
                marginLeft: "0.5rem",
                color: "#fff",
                backgroundColor: "#c69736",
              }}
              type="submit"
            >
              Continue To Payment
            </button></Link>
          Return to cart
        </div>
      </div>
      <Rightinfo />
    </div>
  );
};
