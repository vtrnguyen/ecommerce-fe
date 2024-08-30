import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BACKEND_URL,
    withCredentials: true,
});

instance.interceptors.response.use(
    (response) => {
        const { data } = response;
        return data;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default instance;
