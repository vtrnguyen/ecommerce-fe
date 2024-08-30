import React, { Component, Fragment } from "react";
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";

import Login from "./Login/Login";
import HomePage from "./HomePage/HomePage";

const history = createBrowserHistory();

class App extends Component {

  componentDidUpdate(prevProps) {
    if (prevProps.isAuthenticated !== this.props.isAuthenticated) {
      if (this.props.isAuthenticated) {
        history.push("/");
      } else {
        history.push("/login");
      }
    }
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
            />
            <Route 
              path="/home" 
              element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
            />
            <Route 
              path="/login" 
              element={isAuthenticated ? <Navigate to="/" /> : <Login />} 
            />
          </Routes>
        </BrowserRouter>
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
