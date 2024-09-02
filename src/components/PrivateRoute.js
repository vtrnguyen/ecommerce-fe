import React, { Component } from 'react';
import { Navigate, Outlet } from 'react-router';

const persistedState = JSON.parse(localStorage.getItem('persist:root'));
const auth = JSON.parse(persistedState.auth);
const user = auth.user;

class PrivateRoute extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return user.roleID === "R0" 
        ? <Outlet />
        : <Navigate to={"/"}/>
    }
}

export default PrivateRoute;
