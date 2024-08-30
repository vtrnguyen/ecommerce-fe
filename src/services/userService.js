import axios from "../axios";

const handleLogin = (userInfor) => {
    return axios.post("/auth/login", userInfor);
}

const handleGetUserInfor = (userID) => {
    return axios.get(`/user/get-user-infor`, {
        params: {
            id: userID,
        },
    });
}

const handleGetAllUser = () => {
    return axios.get("/user/get-all-users");
}

export {
    handleLogin, 
    handleGetAllUser, handleGetUserInfor
}
