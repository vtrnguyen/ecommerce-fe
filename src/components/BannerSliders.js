import React, { Component } from 'react';

class BannerSliders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 3 * 60 * 60 * 1000,
        };
    }

    render() {
        

        return (
            <>
                Its BannerSliders
            </>
        );
    }
}

export default BannerSliders;
