import axios from "axios";
import {
    SHIPPING_ADDRESS_FAIL,
    SHIPPING_ADDRESS_POST_FAIL,
    SHIPPING_ADDRESS_POST_REQUEST,
    SHIPPING_ADDRESS_POST_SUCCESS,
    SHIPPING_ADDRESS_REQUEST,
    SHIPPING_ADDRESS_SUCCESS,
} from "../constant/orderconstant";
export const shippingaddress =
    (
        firstname,
        lastname,
        address,
        appartment,
        city,
        country,
        state,
        pin,
        phone,
        email,
        userId,
    ) =>
        async (dispatch) => {
            try {
                dispatch({ type: SHIPPING_ADDRESS_POST_REQUEST });

                const { data } = await axios.post(`http://localhost:5000/api/address`, {
                    firstname,
                    lastname,
                    address,
                    appartment,
                    city,
                    country,
                    state,
                    pin,
                    phone,
                    email,
                    userId,
                });
                dispatch({
                    type:SHIPPING_ADDRESS_POST_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                dispatch({
                    type: SHIPPING_ADDRESS_POST_FAIL,
                    payload: [],
                });
            }
        };

export const shippingaddressget = (userId) => async (dispatch) => {
    try {
        dispatch({ type: SHIPPING_ADDRESS_REQUEST });

        const { data } = await axios.get(
            `http://localhost:5000/api/address/${userId}`
        );

        dispatch({
            type: SHIPPING_ADDRESS_SUCCESS,
            payload: data.user[0],
        });
    } catch (error) {
        dispatch({
            type: SHIPPING_ADDRESS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
