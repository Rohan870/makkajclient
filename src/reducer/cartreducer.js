import {
  ADD_ITEM_TO_CART,
  ADD_ITEM_TO_CART_FAIL,
  ADD_ITEM_TO_CART_SUCCESS,
  CART_LIST_FAIL,
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  DECREMENT,
  INCREMENT,
  REMOVE_ITEM_FROM_CART,
  REMOVE_ITEM_FROM_CART_FAIL,
  REMOVE_ITEM_FROM_CART_SUCCESS,
  SUBTOTAL,
} from "../constant/cartconstant";

export const addCartListReducer = (state = { cart: [], sub: 0 }, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return { cart: [] };
    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        cart: [],
      };

    case ADD_ITEM_TO_CART_FAIL:
      return { error: action.payload };

    case REMOVE_ITEM_FROM_CART:
      return { cart: state.cart };

    case REMOVE_ITEM_FROM_CART_SUCCESS:
      return { cart: state.cart.filter((item) => item._id !== action.payload) };

    case REMOVE_ITEM_FROM_CART_FAIL:
      return { error: action.payload };

    case CART_LIST_REQUEST:
      return {
        cart: [],
      };

    case CART_LIST_SUCCESS:
      return { cart: action.payload };

    case CART_LIST_FAIL:
      return { cart: [] };

    default:
      return state;
  }
};
