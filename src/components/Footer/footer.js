import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="col-1">
                <img src="logo.png" alt="logo" />
                <p>Group Ajmal, pioneer in the incricate art of perfumery in the middle east, embarks on a new journey with the vision of bringing the essence of the Holy Land to the world through its Makkaj FragranceLine.</p>
            </div>
            <div className="col-2">
                <li>
                    <ul><h2>COLLECTIONS</h2></ul>
                    <div className="footerborder"></div>
                    <ul><Link to="/for-her">- FOR HER</Link></ul>
                    <ul><Link to="/for-him">- FOR HIM</Link></ul>
                    <ul><Link to="/concentrate">- CONCENTRATE</Link></ul>
                    <ul><Link to="/dahn-al-oudh">- DAHN AL OUDH</Link></ul>
                    <ul><Link to="/bakhoor">- BAKHOOR</Link></ul>
                </li>
            </div>
            <div className="col-3"> <li>
                    <ul><h2>OTHER LINKS</h2></ul>
                    <div className="footerborder"></div>
                    <ul><Link to="/contact">- CONTACT</Link></ul>
                    <ul><Link to="delivery-and-return">- DELIVERY AND RETURN</Link></ul>
                    <ul><Link to="privacy-policy">- PRIVACY POLICY</Link></ul>
                    <ul><Link to="terms-and-conditions">- TERMS AND CONDITIONS</Link></ul>
                    <ul><Link to="/shipping-policy">- SHIPPING POLICY</Link></ul>
                </li></div>
            <div className="col-4">
                <li>
                    <ul><h2>OUR PROMISE</h2></ul>
                    <div className="footerborder"></div>
                    <ul><p>we make emotive, uncomlicated fragrances designed to make you feel good. All our products are 100% vegan cruelty-free and fun to use.</p></ul>
                    <ul className="flex">
                        <div><i className="fab fa-instagram"></i></div>
                        <div><i className="fab fa-facebook"></i></div>
                        <div><i className="fab fa-youtube"></i></div>
                        <div><i className="fab fa-twitter"></i></div>
                        <div><i className="fab fa-pinterest"></i></div>
                        <div><i className="fab fa-linkedin"></i></div>
                    </ul>
                </li>
            </div>
        </div>
    )
}
