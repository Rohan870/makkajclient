import "./navbar.css";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="nav1">
          <Link to="/">Home</Link>
        </li>
        <li className="nav1">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="nav1">
          <Link to="./products">Products</Link>
        </li>
        <li className="nav1">
          <Link to="/press-room">Press Room</Link>
        </li>
        <li className="nav1">
          <Link to="/stores">Stores</Link>
        </li>
        <li className="nav1">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
