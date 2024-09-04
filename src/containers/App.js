import React, { Component, Fragment } from "react";
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Login/Login";
import HomePage from "../containers/User/HomePage";
import PrivateRoute from "../components/PrivateRoute";
import AdminPage from "./Admin/AdminPage";
import ManageCategoryItem from "../containers/Admin/Navtigations/Redirect/ManageCategoryItem";

class App extends Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={isAuthenticated ? <HomePage /> : <Navigate to="/login" replace />}
            />
            <Route 
              path="/home" 
              element={isAuthenticated ? <HomePage /> : <Navigate to="/login" replace />}
            />
            <Route 
              path="/login" 
              element={isAuthenticated ? <Navigate to="/" replace /> : <Login />} 
            />
            <Route
              path="/admin" 
              element={isAuthenticated ? <PrivateRoute /> : <Navigate to="/login" replace />}
            >
              <Route 
                path="/admin" 
                element={<AdminPage />} 
              />
              <Route 
                path="/admin/category-item/:id" 
                element={<ManageCategoryItem />} 
              />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps)(App);
