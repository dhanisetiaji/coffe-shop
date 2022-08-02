import { withIronSessionApiRoute } from "iron-session/next"
import axios from "axios";
import { sessionOptions } from '../../../lib/session';
const urlAPI = process.env.NEXT_PUBLIC_URL_API;


export default withIronSessionApiRoute(verifyRoute, sessionOptions);

async function verifyRoute(req, res) {
    if (req.session.data) {
        // console.log(req.session.data);
        const token = req.session.data.data.token;

        const response = await axios.get(`${urlAPI}/auth/verify-token`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (response.status === 200) {
            if (response.data.data.exp * 1000 < Date.now()) {
                req.session.destroy();
                return res.status(200).json({
                    success: false,
                    message: "Token expired"
                });
            }
            const dataUser = await axios.post(`${urlAPI}/user/`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return res.status(200).json({ ...dataUser.data.data, isLoggedIn: true, loading: false });
        }

    } else {
        return res.status(401).json({
            loading: false,
            isLoggedIn: false,
            message: "Unauthorized access"
        });
    }
}