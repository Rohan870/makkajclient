import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducer/userreducer";
import { details, priceListReducer, productListReducer } from "./reducer/productreducer";
import { addCartListReducer } from "./reducer/cartreducer";
import { subtotal } from "./reducer/subtotalreducer";
import { shippingAddressReducre } from "./reducer/orderreducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  productList: productListReducer,
  priceList: priceListReducer,
  addCart: addCartListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  subtotal: subtotal,
  detail:details,
  shipping:shippingAddressReducre,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
