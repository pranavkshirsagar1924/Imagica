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
                    Authorization: "3F5Q1kY3jFYMs27tFm0bh6EEHlJfvVOAEcK8do9QKHVaQUcIJNajlPDM",
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
