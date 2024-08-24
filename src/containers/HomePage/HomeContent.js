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
                        <div className="service-item">
                            <div className="service-image">
                                <i class="fas fa-money-check-alt"></i>
                            </div>
                            <div className="service-description">
                                Voucher giảm đến 1 triệu
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-image">
                                <i class="fas fa-shipping-fast"></i>
                            </div>
                            <div className="service-description">
                                Miễn phí ship có Origin Dev
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-image">
                                <i class="fas fa-check"></i>
                            </div>
                            <div className="service-description">
                                Mua nhiều giảm sâu
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-image">
                                <i class="fas fa-hourglass-start"></i>
                            </div>
                            <div className="service-description">
                                Khung giờ săn sale
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-image">
                                <i class="fas fa-code"></i>
                            </div>
                            <div className="service-description">
                                Mã giảm giá
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-image">
                                <i class="fas fa-hand-holding-usd"></i>
                            </div>
                            <div className="service-description">
                                Origin Dev siêu rẻ
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-image">
                                <i class="fas fa-arrow-down"></i>
                            </div>
                            <div className="service-description">
                                Origin Dev style voucher 40%
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-image">
                                <i class="fas fa-globe-americas"></i>
                            </div>
                            <div className="service-description">
                                Hàng quốc tế
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-image">
                                <i class="fab fa-cc-amazon-pay"></i>
                            </div>
                            <div className="service-description">
                                Nạp thẻ & Dịch vụ
                            </div>
                        </div>
                    </div>
                    <div className="main">
                        <div className="main-section-container">
                            <div className="section-category main-section-item">
                                <div className="main-section-header">
                                    Danh mục sản phẩm
                                </div>
                                <div className="section-category-content">
                                    <ul>
                                        <li>
                                            <div className="product-item">
                                                <div className="product-item-image t-shirt"></div>
                                                <div className="product-item-name">
                                                    Thời Trang Nam
                                                </div>
                                            </div>
                                            <div className="product-item">
                                                <div className="product-item-image phone"></div>
                                                <div className="product-item-name">
                                                    Điện Thoại & Phụ Kiện
                                                </div>
                                            </div>
                                            <div className="product-item">
                                                <div className="product-item-image electronic-equiptment"></div>
                                                <div className="product-item-name">
                                                    Thiết Bị Điện Tử
                                                </div>
                                            </div>
                                            <div className="product-item">
                                                <div className="product-item-image computer"></div>
                                                <div className="product-item-name">
                                                    Máy Tính & Laptop
                                                </div>
                                            </div>
                                            <div className="product-item">
                                                <div className="product-item-image camera"></div>
                                                <div className="product-item-name">
                                                    Máy Ảnh & Máy Quay Phim
                                                </div>
                                            </div>
                                            <div className="product-item">
                                                <div className="product-item-image watch"></div>
                                                <div className="product-item-name">
                                                    Đồng Hồ
                                                </div>
                                            </div>
                                            <div className="product-item">
                                                <div className="product-item-image shoe"></div>
                                                <div className="product-item-name">
                                                    Giày Dép Nam
                                                </div>
                                            </div>
                                            <div className="product-item">
                                                <div className="product-item-image household-electric-appliances"></div>
                                                <div className="product-item-name">
                                                    Thiết Bị Điện Gia Dụng
                                                </div>
                                            </div>
                                            <div className="product-item">
                                                <div className="product-item-image sport-travel"></div>
                                                <div className="product-item-name">
                                                    Thể Thao & Du Lịch
                                                </div>
                                            </div>
                                            <div className="product-item">
                                                <div className="product-item-image driver"></div>
                                                <div className="product-item-name">
                                                    Ô Tô & Xe Máy & Xe Đạp
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HomeContent;
