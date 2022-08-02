import axios from 'axios'
import { AuthLogout } from './Auth';

const urlAPI = process.env.NEXT_PUBLIC_URL_API;

const GetVerifyRequest = () => {
    return {
        type: "GET_VERIFY_REQUEST"
    };
}

const GetVerify = (data) => {
    return {
        type: "GET_VERIFY",
        payload: data
    };
}

export const VerifyToken = (data) => {
    return (dispatch) => {
        dispatch(GetVerifyRequest())
        axios({
            method: "GET",
            url: `${urlAPI}/auth/verify-token`,
            headers: {
                Authorization: `Bearer ${data}`
            }
        }).then((res) => {
            if (res.data.data.exp * 1000 < Date.now()) {
                dispatch(AuthLogout())
            }
            if (res.status === 200) {
                axios({
                    method: "POST",
                    url: `${urlAPI}/user/`,
                    headers: {
                        Authorization: `Bearer ${data}`
                    }
                }).then((res) => {
                    dispatch(GetVerify(res.data.data));
                }).catch((err) => {
                    dispatch(AuthLogout())
                    dispatch(GetVerify(err))
                })
            }
        }).catch((err) => {
            dispatch(AuthLogout())
            dispatch(GetVerify(err))

        })
    }

}