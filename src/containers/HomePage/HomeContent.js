import React, { Component } from "react";
import Slider from "react-slick";
import item1 from "../../assests/homepage/homecontent/banner-item1.jpg";
import item2 from "../../assests/homepage/homecontent/banner-item2.jpg";
import item3 from "../../assests/homepage/homecontent/banner-item3.jpg";
import item4 from "../../assests/homepage/homecontent/banner-item4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeContent.scss";

import CountdownTimer from "../../components/CountdownTimer";

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
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/men-fashion.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Thời Trang Nam
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/mobile-phone.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Điện Thoại & Phụ Kiện
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/electronic-equiptment.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Thiết Bị Điện Tử
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/computer.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Máy Tính & Laptop
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/camera.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Máy Ảnh & Máy Quay Phim
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/watch.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Đồng Hồ
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/men-shoe.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Giày Dép Nam
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/household-electric-appliances.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Thiết Bị Điện Gia Dụng
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/sport-travel.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Thể Thao & Du Lịch
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/driver.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Ô Tô & Xe Máy & Xe Đạp
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/women-fashion.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Thời Trang Nữ
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/mom-baby.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Mẹ Và Bé
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/house-life.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Nhà Cửa & Đời Sống
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/beauty.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Sắc Đẹp
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/health.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Sức Khỏe
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/women-shoe.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Giày Dép Nữ
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/women-pocket.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Túi Ví Nữ
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/jewelry.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Phụ Kiện & Trang Sức Nữ
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/online-grocery.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Bách Hóa Online
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="product-item">
                                                <div 
                                                    className="product-item-image"
                                                    style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/product-image/online-bookstore.png?raw=true")` }}
                                                ></div>
                                                <div className="product-item-name">
                                                    Nhà Sách Online
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="section-flash-sale main-section-item">
                                <div className="main-section-header">
                                    Flash Sale
                                    <span>
                                        <CountdownTimer />
                                    </span>
                                </div>
                                <div className="section-flash-sale-content">
                                    <ul>
                                        <li>
                                            <div className="flash-sale-item">
                                                <div 
                                                    className="flash-sale-item-image"
                                                    style={{ backgroundImage: `url("https://raw.githubusercontent.com/vtrnguyen/hosting-image-file/main/flash-sale-product/but-bi-thien-long.jpg?raw=true")` }}
                                                ></div>
                                                <div className="flash-sale-item-price">
                                                    <span>₫</span>
                                                    <strong>45.000</strong>
                                                </div>
                                                <div className="flash-sale-item-statement">
                                                    Đang bán chạy
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flash-sale-item">
                                                <div 
                                                    className="flash-sale-item-image"
                                                    style={{ backgroundImage: `url("https://raw.githubusercontent.com/vtrnguyen/hosting-image-file/main/flash-sale-product/bot-giat-ariel.png?raw=true")` }}
                                                ></div>
                                                <div className="flash-sale-item-price">
                                                    <span>₫</span>
                                                    <strong>203.000</strong>
                                                </div>
                                                <div className="flash-sale-item-statement">
                                                    Đang bán chạy
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flash-sale-item">
                                                <div 
                                                    className="flash-sale-item-image"
                                                    style={{ backgroundImage: `url("https://raw.githubusercontent.com/vtrnguyen/hosting-image-file/main/flash-sale-product/banh-trung-thu.jpg?raw=true")` }}
                                                ></div>
                                                <div className="flash-sale-item-price">
                                                    <span>₫</span>
                                                    <strong>135.000</strong>
                                                </div>
                                                <div className="flash-sale-item-statement">
                                                    Đang bán chạy
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flash-sale-item">
                                                <div 
                                                    className="flash-sale-item-image"
                                                    style={{ backgroundImage: `url("https://raw.githubusercontent.com/vtrnguyen/hosting-image-file/main/flash-sale-product/khau-trang-y-te.jpg?raw=true")` }}
                                                ></div>
                                                <div className="flash-sale-item-price">
                                                    <span>₫</span>
                                                    <strong>18.300</strong>
                                                </div>
                                                <div className="flash-sale-item-statement">
                                                    Đang bán chạy
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flash-sale-item">
                                                <div 
                                                    className="flash-sale-item-image"
                                                    style={{ backgroundImage: `url("https://raw.githubusercontent.com/vtrnguyen/hosting-image-file/main/flash-sale-product/tai-nghe-khong-day.jpg?raw=true")` }}
                                                ></div>
                                                <div className="flash-sale-item-price">
                                                    <span>₫</span>
                                                    <strong>170.000</strong>
                                                </div>
                                                <div className="flash-sale-item-statement">
                                                    Đang bán chạy
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flash-sale-item">
                                                <div 
                                                    className="flash-sale-item-image"
                                                    style={{ backgroundImage: `url("https://raw.githubusercontent.com/vtrnguyen/hosting-image-file/main/flash-sale-product/kendamil.jpg?raw=true")` }}
                                                ></div>
                                                <div className="flash-sale-item-price">
                                                    <span>₫</span>
                                                    <strong>440.000</strong>
                                                </div>
                                                <div className="flash-sale-item-statement">
                                                    Đang bán chạy
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="section-sale-banner main-section-item">
                                <div className="section-sale-banner-content">
                                    <div 
                                        className="sale-banner-item"
                                        style={{ backgroundImage: `url("https://github.com/vtrnguyen/hosting-image-file/blob/main/sale-banner/sale-banner.png?raw=true")` }}
                                    ></div>
                                </div>
                            </div>
                            <div className="section-origin-dev-mall main-section-item">
                                <div className="main-section-header">
                                    <span>Origin Dev Mall</span>
                                    <div className="sub-section-mall-header">
                                        <div className="promises">
                                            <div className="promise-item">
                                                <i class="fas fa-undo-alt"></i>
                                                Trả Hàng Miễn Phí 15 ngày
                                            </div>
                                            <div className="promise-item">
                                                <i class="fas fa-check-double"></i>
                                                Hàng Chính Hãng 100%
                                            </div>
                                            <div className="promise-item">
                                                <i class="fas fa-shipping-fast"></i>
                                                Miễn Phí Vận Chuyển
                                            </div>
                                        </div>
                                        <div className="btn-see-all-mall">
                                            <span>Xem tất cả</span>
                                            <i class="fas fa-arrow-circle-right"></i>
                                        </div>
                                    </div>
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
