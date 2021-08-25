import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { shippingaddress } from "../../actions/orderaction";
import { Rightinfo } from "../../components/rightinfo/rightinfo";
import "./checkout.css";

export const Checkout = () => {
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [apartment, setapartment] = useState("");
  const [phone, setphone] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pin, setpin] = useState("");
  const [country, setcountry] = useState("");

  const history = useHistory();

  //dispatch
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setemail(e.target.value);
  };
  const changeHandler1 = (e) => {
    setaddress(e.target.value);
  };
  const changeHandler2 = (e) => {
    setfname(e.target.value);
  };
  const changeHandler3 = (e) => {
    setlname(e.target.value);
  };
  const changeHandler4 = (e) => {
    setapartment(e.target.value);
  };
  const changeHandler5 = (e) => {
    setphone(e.target.value);
  };
  const changeHandler6 = (e) => {
    setcity(e.target.value);
  };
  const changeHandler7 = (e) => {
    setstate(e.target.value);
  };
  const changeHandler8 = (e) => {
    setpin(e.target.value);
  };
  const changeHandler9 = (e) => {
    setcountry(e.target.value);
  };

  const submitHandler = (e) => {
    dispatch(
      shippingaddress(
        fname,
        lname,
        address,
        apartment,
        city,
        country,
        state,
        pin,
        phone,
        email,
        JSON.parse(localStorage.getItem("userInfo")).user
      )
    );

    history.push("/shipping");
  };

  return (
    <div className="checkout-page">
      <div className="top-info">
        <h3>CHECKOUT</h3>
      </div>
      <div className="left-info">
        <div className="top-logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="contact-info">
          <p>Contact information</p>
          <p className="just-width"></p>
          <p>Already Have an account? Log in</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={changeHandler}
          />
        </div>
        <div className="lower-info">
          <h2 style={{ marginLeft: "3rem" }}>Shipping address</h2>
        </div>
        <div style={{ marginTop: "0rem", marginLeft: "2rem" }}>
          <form
            onSubmit={submitHandler}
            className="checkout-form"
            style={{ padding: "3rem", margin: "0rem" }}
          >
            <input
              value={fname}
              onChange={changeHandler2}
              style={{ width: "40.7%", padding: "1rem", margin: "0.5rem" }}
              type="text"
              placeholder="First Name"
            />
            <input
              value={lname}
              onChange={changeHandler3}
              style={{ width: "40.7%", padding: "1rem", margin: "0.5rem" }}
              type="text"
              placeholder="last Name"
            />
            <input
              value={address}
              onChange={changeHandler1}
              style={{ width: "88%", padding: "1rem", margin: "0.5rem" }}
              type="text"
              placeholder="Address"
            />
            <input
              value={apartment}
              onChange={changeHandler4}
              style={{ width: "88%", padding: "1rem", margin: "0.5rem" }}
              type="text"
              placeholder="Apartment, suite, etc. (Optional)"
            />
            <input
              value={city}
              onChange={changeHandler6}
              style={{ width: "88%", padding: "1rem", margin: "0.5rem" }}
              type="text"
              placeholder="City"
            />
            <input
              value={country}
              onChange={changeHandler9}
              style={{ width: "25%", padding: "1rem", margin: "0.5rem" }}
              type="text"
              placeholder="Country"
            />
            <input
              value={state}
              onChange={changeHandler7}
              style={{ width: "25%", padding: "1rem", margin: "0.5rem" }}
              type="text"
              placeholder="State"
            />
            <input
              value={pin}
              onChange={changeHandler8}
              style={{ width: "25%", padding: "1rem", margin: "0.5rem" }}
              type="text"
              placeholder="Zip code"
            />
            <input
              value={phone}
              onChange={changeHandler5}
              style={{ width: "88%", padding: "1rem", margin: "0.5rem" }}
              type="text"
              placeholder="Phone number"
            />
            <input
              style={{ width: "9%", padding: "1rem", margin: "0.5rem" }}
              type="checkbox"
              id="checkout1"
            />
            <label for="checkout1">Save this info for future</label>
            <br></br>
            <input
              style={{
                width: "25%",
                padding: "1rem",
                margin: "1rem",
                marginLeft: "0.5rem",
                color: "#fff",
                backgroundColor: "#c69736",
              }}
              type="submit"
              value="Continue to Shipping"
            />

            <a href="#">Return to cart</a>
          </form>
        </div>
      </div>
      <Rightinfo />
    </div>
  );
};
