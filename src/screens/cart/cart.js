import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartlist, subtotal, subtotalget } from "../../actions/cartactions";
import { listPrice } from "../../actions/productaction";
import Cartcard from "../../components/cart/cartcard";
import Checkoutbox from "../../components/checkout/checkoutsummary";
import { Coupon } from "../../components/coupons/coupon";
import "./cart.css";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.addCart);
  const prices = useSelector((state) => state.priceList);
  const { price } = prices;

  const { cart } = cartList;
  console.log(cart)
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("login")) == true) {
      dispatch(cartlist(JSON.parse(localStorage.getItem("userInfo")).user));
    }
    dispatch(subtotalget());
    dispatch(listPrice());
  }, [dispatch]);
  return (
    <div className="cart-screen" style={{ display: "flex", flexWrap: "wrap" }}>
      <div
        style={{
          width: "100%",
          height: "6vh",
          borderTop: "2px solid #fff",
          borderBottom: "2px solid #c69736",
          color: "#c69736",
          paddingLeft: "2rem",
        }}
      >
        <h3 style={{ fontWeight: "400", margin: "0.4rem" }}>SHOPPING BAG</h3>
      </div>
      <div style={{ width: "65%" }}>
        {JSON.parse(localStorage.getItem("login")) == true && cart.length > 0
          ? cart.map((items) => {
            return (
              <Cartcard
                id={items._id}
                productid={items.productId}
                img={items.image}
                description={items.description}
                title={items.title}
                count={items.count}
                price={price}
                item={items}
              />
            );
          })
          : cart.length == 0 &&
            JSON.parse(localStorage.getItem("login")) == true
            ? `Cart is Empty`
            : `Please Login`}
      </div>
      <div style={{ width: "35%" }}>
        <Checkoutbox />
      </div>
      <Coupon />
    </div>
  );
};
