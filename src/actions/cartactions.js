import axios from "axios";
import {
  ADD_ITEM_TO_CART,
  ADD_ITEM_TO_CART_FAIL,
  ADD_ITEM_TO_CART_SUCCESS,
  REMOVE_ITEM_FROM_CART_SUCCESS,
  REMOVE_ITEM_FROM_CART,
  REMOVE_ITEM_FROM_CART_FAIL,
  CART_LIST_SUCCESS,
  CART_LIST_REQUEST,
  CART_LIST_FAIL,
  INCREMENT,
  DECREMENT,
  SUBTOTAL,
  STORESUBTOTAL,
} from "../constant/cartconstant";
export const addproductcart =
  (
    title,
    image,
    description,
    price,
    weight,
    dimensions,
    count,
    productId,
    userId
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: ADD_ITEM_TO_CART });

      const { data } = await axios.post(`http://localhost:5000/api/cart`, {
        title,
        image,
        description,
        price,
        weight,
        dimensions,
        count,
        userId,
        productId,
      });
      dispatch({
        type: ADD_ITEM_TO_CART_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_ITEM_TO_CART_FAIL,
        payload: [],
      });
    }
  };
export const removeproductcart = (id) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_ITEM_FROM_CART });

    const { data } = await axios.post(`http://localhost:5000/api/cartdelete`, {
      id,
      userId: JSON.parse(localStorage.getItem("userInfo")).user,
    });
    dispatch({
      type: REMOVE_ITEM_FROM_CART_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_ITEM_FROM_CART_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const cartlist = (userId) => async (dispatch) => {
  try {
    dispatch({ type: CART_LIST_REQUEST });

    const { data } = await axios.get(
      `http://localhost:5000/api/cart/${userId}`
    );

    dispatch({
      type: CART_LIST_SUCCESS,
      payload: data.user[0].products,
    });
  } catch (error) {
    dispatch({
      type: CART_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const subtotal = (subtotal, x) => (dispatch) => {
  dispatch({ type: SUBTOTAL, payload: { add: subtotal, min: x } });
};

export const subtotalget = () => (dispatch) => {
  dispatch({ type: STORESUBTOTAL, payload: 0 });
};

export const cartadd = (userId, id, count) => async (dispatch) => {
  try {
    dispatch({ type: INCREMENT });

    const { data } = await axios.put(`http://localhost:5000/api/cart`, {
      id,
      count,
      userId: JSON.parse(localStorage.getItem("userInfo")).user,
    });
  } catch (error) {
    dispatch({
      type: INCREMENT,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const cartdec = (id, count) => async (dispatch) => {
  try {
    dispatch({ type: DECREMENT });

    const { data } = await axios.put(`http://localhost:5000/api/cart`, {
      count,
      id,
      userId: JSON.parse(localStorage.getItem("userInfo")).user,
    });
  } catch (error) {
    dispatch({
      type: DECREMENT,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
