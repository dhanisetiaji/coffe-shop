import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from '../../../lib/session';
import axios from "axios";
const urlAPI = process.env.NEXT_PUBLIC_URL_API;



export default withIronSessionApiRoute(async (req, res) => {
    const { email, password } = req.body;
    try {
        const response = await axios.post(`${urlAPI}/auth/login`, { email, password });
        if (response.status === 200) {
            req.session.data = response.data;
            await req.session.save();
            return res.status(200).json(response.data);
        }
    } catch (err) {
        return res.status(500).json(err.response.data);
    }
}, sessionOptions);