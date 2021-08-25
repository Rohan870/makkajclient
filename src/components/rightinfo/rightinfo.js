import getSymbolFromCurrency from "currency-symbol-map";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartlist, subtotalget } from "../../actions/cartactions";
import { listPrice } from "../../actions/productaction";

export const Rightinfo = () => {
    const dispatch = useDispatch();

    const cartList = useSelector((state) => state.addCart);
    const prices = useSelector((state) => state.priceList);
    const subtotal = useSelector((state) => state.subtotal);
    const { sub } = subtotal;
    const { price } = prices;

    const { cart } = cartList;

    useEffect(() => {
        dispatch(cartlist(JSON.parse(localStorage.getItem("userInfo")).user));
        dispatch(listPrice());
    }, [dispatch]);


    return (
        <div className="right-info-2">
            <div className="inner-section-info">
                <div className="first-right-div">
                    {cart.map((item) => {
                        return (
                            <div>
                                <img src={item.image} alt="perfume" />
                                <span>
                                    {item.count}
                                </span>
                                <p>{item.title}</p>
                                <p>{getSymbolFromCurrency(price)}{item.price}</p>
                            </div>
                        )
                    })}

                </div>
                <div className="second-right-div">
                    <input type="text" placeholder="Gift card or discount code" />
                    <button type="submit">Apply</button>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                    }}
                >
                    <p style={{ width: "60%" }}>Subtotal</p>
                    <p style={{}}>{getSymbolFromCurrency(price)}{localStorage.getItem('total')}</p>
                    <p style={{ width: "60%" }}>Shipping</p>
                    <p style={{}}>Free shipping</p>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                    }}
                >
                    <p
                        style={{
                            width: "60%",
                            fontWeight: "600",
                            fontSize: "24px",
                            paddingBottom: "0",
                            marginBottom: "0",
                        }}
                    >
                        Total
                    </p>
                    <p style={{ fontWeight: "bolder" }}>{getSymbolFromCurrency(price)}{localStorage.getItem('total')}</p>
                    <p style={{ width: "60%", paddingTop: "0", marginTop: "0" }}>
                        including 18.08 in taxes
                    </p>
                </div>
            </div>
        </div>
    )
}