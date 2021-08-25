import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shippingaddressget } from "../../actions/orderaction";
import { Rightinfo } from "../../components/rightinfo/rightinfo";
import "./paymentscreen.css";

export const Paymentscreen = () => {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.shipping);
  const { address } = addresses;

  useEffect(() => {
    dispatch(
      shippingaddressget(JSON.parse(localStorage.getItem("userInfo")).user)
    );
  }, [dispatch]);
  return (
    <div className="payment-page">
      <div className="shipping-top-info">
        <h3>PAYMENT</h3>
      </div>
      <div className="payment-left-info">
        <div className="top-logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="bottom-section">
          <section className="inner-section">
            <p>Contact</p>
            <p>{address.email}</p>
          </section>
          <section className="inner-section">
            <p>Ship To</p>
            <p>
              {address.adress} {address.appertment} {address.city}
              {address.state} {address.country}{" "}
            </p>
          </section>
          <section className="inner-section">
            <p>Method</p>
            <p></p>
          </section>
        </div>
        <div className="last-section">
          <h2>Payment</h2>
          <p style={{ color: "#c69736" }}>
            All transactions are end-to-end encrypted.
          </p>
          <div className="payments"></div>
          <div>
            <h2>Billing address</h2>
            <p style={{ color: "#c69736" }}>
              Select the address that matches your card or payment method.
            </p>
          </div>

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
            Complete order
          </button>
          <a href="#">Return to cart</a>
        </div>
      </div>
      <Rightinfo />
    </div>
  );
};
