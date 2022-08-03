import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartRequest = () => {
    return {
        type: "CART_REQUEST"
    };
}

const Cart = (data) => {
    return {
        type: "GET_CART",
        payload: data
    };
};


const CartErr = (err) => {
    return {
        type: "CART_ERR",
        payload: err
    };
}

export const saveItem = (data) => {
    return (dispatch) => {
        dispatch(Cart(data));
    }
}

export const delItem = () => {
    return {
        type: "DEL_CART"
    };
}

