import axios from 'axios';

const buildOptions = (data) => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (data) {
        options.data = data;
    }

    return options;
};

const request = async (method, url, data) => {
    try {
        const response = await axios({
            method,
            url,
            ...buildOptions(data),
        });

        return response.status === 204 ? {} : response.data;
    } catch (error) {
        console.error('HTTP Request Failed:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Something went wrong');
    }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
