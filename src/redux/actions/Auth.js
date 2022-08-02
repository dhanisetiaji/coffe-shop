import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const urlAPI = process.env.NEXT_PUBLIC_URL_API;

const GetAuthRequest = () => {
    return {
        type: "GET_AUTH_REQUEST"
    };
}

const GetAuth = (data) => {
    return {
        type: "GET_AUTH",
        payload: data
    };
};

const GetAuthVerify = (data) => {
    return {
        type: "GET_AUTH_VERIFY",
        payload: data
    };
};

const GetAuthReg = (data) => {
    return {
        type: "GET_AUTH_REG",
        payload: data
    };
};

const GetAuthErr = (err) => {
    return {
        type: "GET_AUTH_ERR",
        payload: err
    };
}

export const AuthLogout = () => {
    return {
        type: "AUTH_LOGOUT",
    }
}

export const GetAuthLogin = (formLogin) => {
    return (dispatch) => {
        dispatch(GetAuthRequest())

    }
};