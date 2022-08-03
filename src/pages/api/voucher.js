import axios from "axios";

const urlAPI = process.env.NEXT_PUBLIC_URL_API;

const voucherRoute = async (req, res) => {
    const { code } = req.query;
    if (code !== undefined) {
        try {
            const response = await axios.get(`${urlAPI}/voucher?code=${code}`);
            if (response.status === 200) {
                return res.status(200).json(response.data);
            }
        } catch (err) {
            return res.status(500).json(err.response.data);
        }
    }

}

export default voucherRoute;