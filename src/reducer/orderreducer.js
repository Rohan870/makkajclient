import {
    SHIPPING_ADDRESS_FAIL,
    SHIPPING_ADDRESS_POST_FAIL,
    SHIPPING_ADDRESS_POST_REQUEST,
    SHIPPING_ADDRESS_POST_SUCCESS,
    SHIPPING_ADDRESS_REQUEST,
    SHIPPING_ADDRESS_SUCCESS,
} from "../constant/orderconstant";

export const shippingAddressReducre = (state = { address: {} }, action) => {
    switch (action.type) {
        case SHIPPING_ADDRESS_REQUEST:
            return { address: {} };
        case SHIPPING_ADDRESS_SUCCESS:
            return { address: action.payload };
        case SHIPPING_ADDRESS_FAIL:
            return { err: action.payload };

        case SHIPPING_ADDRESS_POST_FAIL:
            return { err: action.payload };
        case SHIPPING_ADDRESS_POST_REQUEST:
            return { address: {} };
        case SHIPPING_ADDRESS_POST_SUCCESS:
            return { address: action.payload };


        default:
            return state;
    }
};
