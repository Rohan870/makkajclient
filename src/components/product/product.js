import React from "react";
import { useDispatch } from "react-redux";
import { addproductcart } from "../../actions/cartactions";
import "./product.css";
import getSymbolFromCurrency from "currency-symbol-map";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { price, product } = props;
  const dispatch = useDispatch();

  return (
    <div key={product._id} className="card">
      <Link to={`/${product._id}`}>
        <img className="medium" src={product.image} alt={product.title} />
      </Link>
      <div className="card-body">
        <a>
          <h2>{product.title}</h2>
        </a>
        <div className="price">{getSymbolFromCurrency(price)}{product.price[price]}</div>
        <div className="short">
          <i>{product.short}</i>
        </div>
        <div
          className="add-to-cart-button"
          onClick={() => {
            dispatch(
              addproductcart(
                product.title,
                product.image,
                product.description,
                product.price[price],
                product.weight,
                product.dimensions,
                1,
                product._id,
                JSON.parse(localStorage.getItem("userInfo")).user
              )
            );
          }}
        >
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
