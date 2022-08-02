import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const urlAPI = process.env.NEXT_PUBLIC_URL_API;

const GetUsersRequest = () => {
    return {
        type: "GET_USERS_REQUEST"
    };
}

const getAllUsers = (data) => {
    return {
        type: "GET_USERS",
        payload: data
    };
}

const GetUsersResponse = (data) => {
    return {
        type: "GET_USERS_RESPONSE",
        payload: data
    };
}

const GetUsersError = (error) => {
    return {
        type: "GET_USERS_ERROR",
        payload: error
    };
}

export const GetAllUsers = (token, { orderBy, page = 1, limit, search }) => {
    return (dispatch) => {
        dispatch(GetUsersRequest())
        axios({
            method: "GET",
            url: `${urlAPI}/user${search ? `?search=${search}` : '?search='}${orderBy ? `&orderBy=${orderBy}` : ''}${page && limit ? `&page=${page}&limit=${limit}` : ''}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            dispatch(getAllUsers(res.data.data));
        }).catch((err) => {
            dispatch(GetUsersError(err.response.data));

        })
    }
}
