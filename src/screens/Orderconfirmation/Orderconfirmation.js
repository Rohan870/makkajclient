import React from "react";
import "./Orderconfirmation.css";

export const Orderconfirmation = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        borderBottom: "2px solid #c69736",
        paddingBottom: "5rem",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "auto",
          borderTop: "2px solid #fff",
          borderBottom: "2px solid #c69736",
        }}
      >
        <h3
          style={{
            fontWeight: "400",
            color: "#c69736",
            margin: "0.4rem",
            paddingLeft: "1rem",
          }}
        >
          ORDER CONFIRMATION
        </h3>
      </div>
      <div className="order-top-section">
        <div className="order-top-logo">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <h1>YOUR ORDER IS ON THE WAY</h1>
        <button>TRACK YOUR ORDER</button>
        <p>Please allow 24 hours to track your order</p>
      </div>
      <div className="order-middle-section">
        <div>
          <h1>SUMMARY</h1>
          <section className="order-id">
            <p>ORDER ID : </p>
            <p style={{ color: "#fff" }}>6328723742</p>
          </section>
          <section className="order-date">
            <p>ORDER DATE : </p>
            <p style={{ color: "#fff" }}>March 30, 2022</p>
          </section>
          <section className="order-total">
            <p>ORDER TOTAL : </p>
            <p style={{ color: "#fff" }}>3500</p>
          </section>
        </div>
        <div>
          <h1>SHIPPING ADDRESS</h1>
          <p style={{ paddingLeft: "2rem", color: "#fff" }}>
            #5/210 2nd Floor 9th cross, IG Circle, 1st Phase, J.P. Nagar,
            Bangaluru, Karnataka
          </p>
        </div>
      </div>
      <div className="cart-confirmation">
        <div className="top-shelf">
          <p>ITEM</p>
          <p>PRICE</p>
          <p>QTY</p>
        </div>
        <div className="middle-shelf">
          <section>
            <img src="./images/logo.png" alt="perfume" />
            <h2 style={{ color: "#fff" }}>PERFUME NAME</h2>
          </section>
          <section style={{ width: "26%" }}>
            <p>3500</p>
          </section>
          <section>
            <p>1</p>
          </section>
        </div>
        <div className="lower-shelf">
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <p>SUBTOTAL ITEMS (1 ITEMS) : </p>
            <p style={{ color: "#fff" }}>3400</p>
          </section>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <p>SHIPPING CHARGES : </p>
            <p style={{ color: "#fff" }}>FREE</p>
          </section>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <p>ESTIMATED TAX : </p>
            <p style={{ color: "#fff" }}>100</p>
          </section>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <p>ORDER TOTAL : </p>
            <p style={{ color: "#fff" }}>3500</p>
          </section>
        </div>
      </div>
    </div>
  );
};
