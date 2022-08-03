import axios from "axios";

const urlAPI = process.env.NEXT_PUBLIC_URL_API;

const productRoute = async (req, res) => {
    const { orderBy, page = 1, limit, search, slug } = req.query;
    if (slug) {
        try {
            const response = await axios.get(`${urlAPI}/product/${slug}`);
            if (response.status === 200) {
                return res.status(200).json(response.data);
            }
        } catch (err) {
            return res.status(500).json(err.response.data);
        }

    } else {
        try {
            const response = await axios.get(`${urlAPI}/product${search ? `?search=${search}` : '?search='}${orderBy ? `&orderBy=${orderBy}` : ''}${page && limit ? `&page=${page}&limit=${limit}` : ''}`);
            if (response.status === 200) {
                return res.status(200).json(response.data);
            }
        } catch (err) {
            return res.status(500).json(err.response.data);
        }
    }

}

export default productRoute;