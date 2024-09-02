import axios from "axios";
import { store } from "./store/store";
import { logout, refreshToken } from "./store/authSlice";
import { sendRefreshToken } from "../src/services/userService";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BACKEND_URL,
    withCredentials: true,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    })

    failedQueue = [];
}

instance.interceptors.request.use(
    async (request) => {
        let persistedState = JSON.parse(localStorage.getItem('persist:root'));
        
        if (persistedState) {
            let authState = JSON.parse(persistedState.auth);
            let token = authState.token;

            if (!token) {
                const maxRetries = 3;
                let retries = 0;

                while(!token && retries < maxRetries) {
                    await new Promise(resolve => setTimeout(resolve, 100));
                    persistedState = JSON.parse(localStorage.getItem('persist:root'));
                    authState = JSON.parse(persistedState.auth);
                    token = authState.token;
                    retries++;
                }
            }

            if (token) {
                request.headers["Authorization"] = `Bearer ${token}`;
            }
        }

        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    (response) => {
        const { data } = response;
        return data;
    },
    async (error) => {
        const originalRequest = error.config;
        
        // request timeout when token is entired
        if (error.response.data.errCode === -2 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then(token => {
                    originalRequest.headers['Authorization'] = 'Bearer ' + token;
                    return axios(originalRequest);
                }).catch(err => {
                    return Promise.reject(err);
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                let refreshTokenInfor = await sendRefreshToken();

                if (refreshTokenInfor && refreshTokenInfor.errCode === 0) {
                    store.dispatch(refreshToken({ newAccessToken: refreshTokenInfor.newAccessToken }));
                    originalRequest.headers['Authorization'] = 'Bearer ' + refreshTokenInfor.newAccessToken;
                    processQueue(null, refreshTokenInfor.newAccessToken);
                    return axios(originalRequest);
                }

                if (refreshTokenInfor && refreshTokenInfor.errCode === 1) {
                    store.dispatch(logout());
                    processQueue(refreshTokenInfor.errCode, null);
                    return Promise.reject(error);
                }
            } catch (err) {
                processQueue(err, null);
                return Promise.reject(err);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
)

export default instance;
