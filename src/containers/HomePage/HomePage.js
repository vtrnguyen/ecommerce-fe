import React, { Component } from "react";
import "./HomePage.scss";

import HomeHeader from "./HomeHeader";
import HomeContent from "./HomeContent";
// import HomeFooter from "./HomeFooter";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }    

    render() {
        return (
            <>
                <HomeHeader />
                <HomeContent />
            </>
        )
    }
}

export default HomePage;
