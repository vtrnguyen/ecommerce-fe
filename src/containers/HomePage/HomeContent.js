import React, { Component } from "react";
import Slider from "react-slick";
import item1 from "../../assests/homepage/homecontent/banner-item1.jpg";
import item2 from "../../assests/homepage/homecontent/banner-item2.jpg";
import item3 from "../../assests/homepage/homecontent/banner-item3.jpg";
import item4 from "../../assests/homepage/homecontent/banner-item4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeContent.scss";

class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }

    render() {
        let settings = {
            dots: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
        };

        return (
            <>
                <div className="wrapper">
                    <div className="section-banner-container">
                        <div className="banner-container">
                            <div className="banner-sliders">
                                <Slider {...settings}>
                                    <div className="slider-item">
                                        <img src={item1} alt="ảnh banner" />
                                    </div>
                                    <div className="slider-item">
                                        <img src={item2} alt="ảnh banner"/>
                                    </div>
                                    <div className="slider-item">
                                        <img src={item3} alt="ảnh banner"/>
                                    </div>
                                    <div className="slider-item">
                                        <img src={item4} alt="ảnh banner"/>
                                    </div>
                                </Slider>
                            </div>
                            <div className="banner-salers">
                                <div className="banner-saler-top banner-image"></div>
                                <div className="banner-saler-bottom banner-image"></div>
                            </div>
                        </div>
                    </div>
                    <div className="section-services">
                        
                    </div>
                </div>
            </>
        )
    }
}

export default HomeContent;
