import axios from 'axios';

export default async function handler(req, res) {
    const { query } = req.query;
    console.log(query);
    try {
        const response = await axios.get(
            'https://api.pexels.com/v1/search',
            {
                params: { query, per_page: 20 },
                headers: {
                    Authorization: "your pexels api key",
                },
            }
        );
        console.log(response.data);
        res.status(200).json(response.data);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}
