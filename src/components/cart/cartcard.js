import { BiEditAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./cartcard.css";
import {
  cartdec,
  removeproductcart,
  cartadd,
  subtotal,
} from "../../actions/cartactions";
import { useState } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cartcard = (props) => {
  const { img, description, size,productid, title, count, price, id, item } = props;

  const [input, setinput] = useState(count);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(subtotal(item.price * input, 0));
  }, []);

  return (
    <div className="cart-box">
      <div className="head-cart">
        <span>ITEM</span>
        <span>PRICE</span>
        <span>QTY</span>
        <span>SUBTOTAL</span>
      </div>
      <div className="cart-body">
        <div className="cart-imgbox">
          <img src={img} alt={title} />
          <div className="cart-detail-heading">
            <h1> {title}</h1>
          </div>
        </div>
        <div className="cart-quant-box">
          <div className="cart-box-full">
            <div className="cart-quant-price">
              {/*price*/}

              <div className="cart-itm-price">
                <p style={{ display: "flex" }}>
                  <div>{getSymbolFromCurrency(price)}</div>
                  <div>{item.price}</div>
                </p>
              </div>
            </div>
            <div className="cart-quant">
              <span
                className="increment"
                onClick={() => {
                  setinput(input - 1);
                  dispatch(
                    cartdec(
                      id,
                      input - 1,
                      JSON.parse(localStorage.getItem("userInfo")).user
                    )
                  );
                  dispatch(
                    subtotal(item.price * input, item.price * (input + 1))
                  );
                }}
              >
                <i class="fas fa-minus"></i>
              </span>
              {/*quant*/}
              <input
                name={"name" + id}
                type="number"
                value={input}
                className="cart-quantity"
                placeholder="Qty"
                min="1"
              />
              <span
                className="decrement"
                onClick={() => {
                  setinput(input + 1);
                  dispatch(
                    cartdec(
                      id,
                      input + 1,
                      JSON.parse(localStorage.getItem("userInfo")).user
                    )
                  );
                  dispatch(
                    subtotal(item.price * input, item.price * (input - 1))
                  );
                }}
              >
                <i class="fas fa-plus"></i>
              </span>
            </div>
            <div className="cart-quant-price">
              {/*pric e*/}

              <div className="cart-itm-price">
                <p className="subtotal-price">
                  <div>{getSymbolFromCurrency(price)} </div>
                  <div>{item.price * input}</div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="edit-cart">
        <div className="cart-edit">
          <Link to={`/${productid}`}>
            <BiEditAlt /></Link>
        </div>
        <div
          onClick={() => {
            dispatch(removeproductcart(id));
            dispatch(subtotal(0, item.price * input));
          }}
          className="cart-edit"
          style={{ marginLeft: "10px" }}
        >
          <RiDeleteBin5Line />
        </div>
      </div>
      <div className="shoppingbag-update">
        <button>Update Shopping Bag</button>
      </div>
    </div>
  );
};
export default Cartcard;
