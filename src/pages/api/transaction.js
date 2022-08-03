import axios from "axios";

const urlAPI = process.env.NEXT_PUBLIC_URL_API;

const transRoute = async (req, res) => {
    if (req.body.userId === "") {
        const { total, transactionName, transactionAddress, transactionPhone, qty, productId } = req.body;
        try {
            const response = await axios.post(`${urlAPI}/transaction`, { total, transactionName, transactionAddress, transactionPhone, qty, productId });
            if (response.status === 200) {
                return res.status(200).json(response.data);
            }
        } catch (err) {
            return res.status(500).json(err.response.data);
        }
    } else {
        const { userId, total, transactionName, transactionAddress, transactionPhone, qty, productId } = req.body;
        try {
            const response = await axios.post(`${urlAPI}/transaction`, { userId, total, transactionName, transactionAddress, transactionPhone, qty, productId });
            if (response.status === 200) {
                return res.status(200).json(response.data);
            }
        } catch (err) {
            return res.status(500).json(err.response.data);
        }

    }

}

export default transRoute;