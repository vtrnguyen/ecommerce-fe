import React, { Component, Fragment } from "react";
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login/Login";
import HomePage from "./HomePage/HomePage";

class App extends Component {

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App;
