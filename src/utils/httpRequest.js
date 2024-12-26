import axios from 'axios';

// Tạo instance Axios
export const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: true, // Gửi cookie với request
    headers: {
        'Content-Type': 'application/json',
    },
});

// Method HTTP phổ biến
export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export const post = async (path, data, options = {}) => {
    const response = await request.post(path, data, options);
    return response.data;
};

export const patch = async (path, data, options = {}) => {
    const response = await request.patch(path, data, options);
    return response.data;
};

export const put = async (path, data, options = {}) => {
    const response = await request.put(path, data, options);
    return response.data;
};

export const remove = async (path, options = {}) => {
    const response = await request.delete(path, options);
    return response.data;
};
