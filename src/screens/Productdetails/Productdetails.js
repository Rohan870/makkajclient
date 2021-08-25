import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { details, listProducts } from "../../actions/productaction";
import "./Productdetails.css";
import { listPrice } from "../../actions/productaction";
import getSymbolFromCurrency from "currency-symbol-map";
import { addproductcart } from "../../actions/cartactions";
import Product from "../../components/product/product";
import { Relatedproducts } from "../../components/Relatedproducts/Relatedproducts";

export const Productdetails = () => {
  const { productid } = useParams();
  const dispatch = useDispatch();
  const prices = useSelector((state) => state.priceList);
  const { price } = prices;
  const detailes = useSelector((state) => state.detail);
  const [innerhtml, setinnerhtml] = useState("");
  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;

  const { detail } = detailes;

  useEffect(() => {
    dispatch(listPrice());
    dispatch(listProducts());

    dispatch(details(productid));
  }, []);

  return detail != null ? (
    <div>
      <div className="breadcrumbs"></div>
      <div className="detail-section">
        <div className="detail-section-logo">
          <div className="logo-internal-section">
            <div className="just-border"></div>
            <div className="just-logo">
              <img src="./images/logo.png" alt="logo" />
            </div>
            <div className="just-border"></div>
          </div>
          <p>POUR HOMME</p>
          <h1>{detail.title}</h1>
        </div>
        <div className="detail-section-image">
          <img src={detail.image} alt="perfume"></img>
        </div>
        <div className="detail-section-text">
          <div className="detail-section-inner">
            <h3>{detail.short}</h3>
            <p>{detail.description}</p>
            <div class="detail-page-customize">
              <div>QTY : 1</div>
              <div>SIZE : {detail.size}</div>
            </div>
            <div className="detail-page-button">
              <p>
                {getSymbolFromCurrency(price)}
                {detail.price[price]}
              </p>
              <button
                type="submit"
                onClick={() => {
                  dispatch(
                    addproductcart(
                      detail.title,
                      detail.image,
                      detail.description,
                      detail.price[price],
                      detail.weight,
                      detail.dimensions,
                      1,
                      detail._id,
                      JSON.parse(localStorage.getItem("userInfo")).user
                    )
                  );
                }}
              >
                ADD TO BASKET
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-info">
        <h2
          style={{
            border: "1px solid gold",
            background: "#c69736",
            color: "#fff",
            margin: "0",
            paddingTop: "1rem",
            fontWeight: "600",
          }}
          onClick={() => {
            document.getElementById("details").innerHTML = detail.description;
          }}
        >
          DESCRIPTION
        </h2>
        <h2 onClick={() => {}}>SHIPPING POLICY</h2>
        <h2 onClick={() => {}}>CUSTOMER REVIEWS</h2>
        <h2 onClick={() => {}}>FAQ's</h2>
      </div>
      <div className="details-desc" id="details">
        {detail.description}
      </div>
      <div className="related-products">
        <div className="just-border-2"></div>
        <div>
          <h1>RELATED PRODUCTS</h1>
        </div>
        <div className="just-border-3"></div>
      </div>
      <div
        style={{ height: "80vh", justifyContent: "center", paddingTop: "1rem" }}
      >
        <Relatedproducts />
      </div>
    </div>
  ) : (
    <div>or</div>
  );
};
