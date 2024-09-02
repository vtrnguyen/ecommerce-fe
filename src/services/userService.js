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

const sendRefreshToken = () => {
    return axios.post("/auth/refresh-token");
}

const handleDeleteUser = (deteledID) => {
    return axios.delete(`/user/delete-user`, {
        params: {
            id: deteledID,
        },
    });
}

const handleCreateUser = (userInfor) => {
    return axios.post("/user/create-new-user", userInfor);
}

const handleUpdateUser = (updateInfor) => {
    return axios.put("/user/update-user", updateInfor);
}

export {
    handleLogin, 
    handleGetAllUser, handleGetUserInfor,
    sendRefreshToken,
    handleDeleteUser,
    handleCreateUser,
    handleUpdateUser,
}
