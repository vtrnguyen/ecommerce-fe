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
// import BannerSlidres from "../../components/BannerSliders";

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
                                <i className="fas fa-money-check-alt"></i>
                            </div>
                            <div className="service-description">
                                Voucher giảm đến 1 triệu
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-image">
                                <i className="fas fa-shipping-fast"></i>
                            </div>
                            <div className="service-description">
                                Miễn phí ship có Origin Dev
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-image">
                                <i className="fas fa-check"></i>
                            </div>
                            <div className="service-description">
                                Mua nhiều giảm sâu
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-image">
                                <i className="fas fa-hourglass-start"></i>
                            </div>
                            <div className="service-description">
                                Khung giờ săn sale
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-image">
                                <i className="fas fa-code"></i>
                            </div>
                            <div className="service-description">
                                Mã giảm giá
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-image">
                                <i className="fas fa-hand-holding-usd"></i>
                            </div>
                            <div className="service-description">
                                Origin Dev siêu rẻ
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-image">
                                <i className="fas fa-arrow-down"></i>
                            </div>
                            <div className="service-description">
                                Origin Dev style voucher 40%
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-image">
                                <i className="fas fa-globe-americas"></i>
                            </div>
                            <div className="service-description">
                                Hàng quốc tế
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-image">
                                <i className="fab fa-cc-amazon-pay"></i>
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
                                                <i className="fas fa-undo-alt"></i>
                                                Trả Hàng Miễn Phí 15 ngày
                                            </div>
                                            <div className="promise-item">
                                                <i className="fas fa-check-double"></i>
                                                Hàng Chính Hãng 100%
                                            </div>
                                            <div className="promise-item">
                                                <i className="fas fa-shipping-fast"></i>
                                                Miễn Phí Vận Chuyển
                                            </div>
                                        </div>
                                        <div className="btn-see-all-mall">
                                            <span>Xem tất cả</span>
                                            <i className="fas fa-arrow-circle-right"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-mall-content">
                                    <div className="section-mall-banner">
                                    <div className="banner-sliders">
                                        <Slider {...settings}>
                                            <div className="slider-item">
                                                <img src={"https://cf.shopee.vn/file/sg-11134258-7rdyi-lz966hhq1og692"} alt="ảnh banner" />
                                            </div>
                                            <div className="slider-item">
                                                <img src={"https://cf.shopee.vn/file/sg-11134258-7rdvu-lz96cwnprg9211"} alt="ảnh banner"/>
                                            </div>
                                            <div className="slider-item">
                                                <img src={"https://cf.shopee.vn/file/sg-11134258-7rdvs-lz961kj509jub6"} alt="ảnh banner"/>
                                            </div>
                                            <div className="slider-item">
                                                <img src={"https://cf.shopee.vn/file/sg-11134258-7rdvx-lz966ju2m8sn50"} alt="ảnh banner"/>
                                            </div>
                                            <div className="slider-item">
                                                <img src={"https://cf.shopee.vn/file/sg-11134258-7rdx4-lz966ktl6aaycd"} alt="ảnh banner"/>
                                            </div>
                                        </Slider>
                                    </div>
                                    </div>
                                    <div className="section-mall-sale-product">
                                        <ul>
                                            <li>
                                                <div className="mall-sale-product-item">
                                                    <div 
                                                        className="mall-sale-product-image"
                                                        style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-50009109-06fb832ef52b45481158c26831cc459b_xhdpi")` }}
                                                    ></div>
                                                    <div className="mall-sale-product-title">
                                                        Thời trang -50%
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mall-sale-product-item">
                                                    <div 
                                                        className="mall-sale-product-image"
                                                        style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/be40023a9d9cff397a470460bc7a924d_xhdpi")` }}
                                                    ></div>
                                                    <div className="mall-sale-product-title">
                                                        Deli siêu sale
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mall-sale-product-item">
                                                    <div 
                                                        className="mall-sale-product-image"
                                                        style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-50009109-b71e5e73e9d5705a0eba35f0d03c33c6_xhdpi")` }}
                                                    ></div>
                                                    <div className="mall-sale-product-title">
                                                        Giảm đến 50%
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mall-sale-product-item">
                                                    <div 
                                                        className="mall-sale-product-image"
                                                        style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/5fb3f7b359a582f322ea39313e10260b_xhdpi")` }}
                                                    ></div>
                                                    <div className="mall-sale-product-title">
                                                        Mua 1 tặng 1
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mall-sale-product-item">
                                                    <div 
                                                        className="mall-sale-product-image"
                                                        style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lx6pdo1qy3177a_xhdpi")` }}
                                                    ></div>
                                                    <div className="mall-sale-product-title">
                                                        Giảm sốc 50%
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mall-sale-product-item">
                                                    <div 
                                                        className="mall-sale-product-image"
                                                        style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-50009109-7e80ab64bdc989f5c0862ed828f343a2_xhdpi")` }}
                                                    ></div>
                                                    <div className="mall-sale-product-title">
                                                        Ưu đãi đến 50%
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mall-sale-product-item">
                                                    <div 
                                                        className="mall-sale-product-image"
                                                        style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lx6pdo1qwogrf1_xhdpi")` }}
                                                    ></div>
                                                    <div className="mall-sale-product-title">
                                                        Mua 1 được 2
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mall-sale-product-item">
                                                    <div 
                                                        className="mall-sale-product-image"
                                                        style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-50009109-38bd1887c97742c1ccadde3fb952c75f_xhdpi")` }}
                                                    ></div>
                                                    <div className="mall-sale-product-title">
                                                        Mua là có quà
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="section-regular-search main-section-item">
                                <div className="main-section-header">
                                    <span>Tìm kiếm hàng đầu</span>
                                    <div className="btn-see-all-search">
                                        <span>Xem tất cả</span>
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                                <div className="regular-search-list">
                                    <ul>
                                        <li>
                                            <div className="regular-search-item">
                                                <div className="regular-search-detail-infor">
                                                    <div 
                                                        className="regular-search-image"
                                                        style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/b3ed50dba5699ee9283f02f50352dc0b")` }}
                                                    ></div>
                                                    <div className="regular-search-sales">
                                                        Bán 5k+ / tháng
                                                    </div>
                                                </div>
                                                <div className="regular-search-name">
                                                    Tay cầm chơi game
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="regular-search-item">
                                                <div className="regular-search-detail-infor">
                                                    <div 
                                                        className="regular-search-image"
                                                        style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/809ab9f9d425df90e4c66a7ff6ba4a9e")` }}
                                                    ></div>
                                                    <div className="regular-search-sales">
                                                        Bán 3k+ / tháng
                                                    </div>
                                                </div>
                                                <div className="regular-search-name">
                                                    Máy game cầm tay
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="regular-search-item">
                                                <div className="regular-search-detail-infor">
                                                    <div 
                                                        className="regular-search-image"
                                                        style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/0665b9d50eb8f90fbf857b5b8a424ee1")` }}
                                                    ></div>
                                                    <div className="regular-search-sales">
                                                        Bán 11k+ / tháng
                                                    </div>
                                                </div>
                                                <div className="regular-search-name">
                                                    Cây sen đá
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="regular-search-item">
                                                <div className="regular-search-detail-infor">
                                                    <div 
                                                        className="regular-search-image"
                                                        style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/32261c580742f31c00cc71c72004a188")` }}
                                                    ></div>
                                                    <div className="regular-search-sales">
                                                        Bán 10k+ / tháng
                                                    </div>
                                                </div>
                                                <div className="regular-search-name">
                                                    Bóng đá
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="regular-search-item">
                                                <div className="regular-search-detail-infor">
                                                    <div 
                                                        className="regular-search-image"
                                                        style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/4b02ab9cfacea04b4a25c85823311f2d")` }}
                                                    ></div>
                                                    <div className="regular-search-sales">
                                                        Bán 27k+ / tháng
                                                    </div>
                                                </div>
                                                <div className="regular-search-name">
                                                    Áo đá bóng
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="regular-search-item">
                                                <div className="regular-search-detail-infor">
                                                    <div 
                                                        className="regular-search-image"
                                                        style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/a8932fe3e0971f9f453e595e5c864001")` }}
                                                    ></div>
                                                    <div className="regular-search-sales">
                                                        Bán 9k+ / tháng
                                                    </div>
                                                </div>
                                                <div className="regular-search-name">
                                                    Bàn phím giả cơ
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="section-today-recommened">
                                <div className="main-section-header main-section-sticky-header">
                                    Gợi ý hôm nay
                                </div>
                                <div className="recommened-product-content">
                                    <ul>
                                        <li>
                                            <div className="recommened-product-item">
                                                <div 
                                                    className="recommened-product-image"
                                                    style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lu8zwm8s9onl3e_tn.webp")` }}
                                                ></div>
                                                <div className="recommened-product-detail-information">
                                                    <div className="recommened-product-name">
                                                        <div>
                                                            <span>Yêu thích</span>
                                                            Quần Baggy Kaki Unisex Cao Cấp Cạp Chun Ống Suông Thoải Mái. 
                                                            Quần Dài Kaki Baggy Nam Dáng Đứng Ống Rộng - QKK11
                                                        </div>
                                                    </div>
                                                    <div className="recommened-product-promotion">
                                                        <div className="discount">Giảm 20k</div>
                                                        <div className="description">Rẻ vô địch</div>
                                                    </div>
                                                    <div className="recommened-product-sale-information">
                                                        <div className="recommened-product-price">
                                                            <span>₫</span>
                                                            <strong>170.000</strong>
                                                        </div>
                                                        <span>Đã bán 694</span>
                                                    </div>
                                                </div>
                                                <div className="search-same-product">
                                                    Tìm sản phẩm tương tự
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recommened-product-item">
                                                <div 
                                                    className="recommened-product-image"
                                                    style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx3egs3vcezfe1_tn.webp")` }}
                                                ></div>
                                                <div className="recommened-product-detail-information">
                                                    <div className="recommened-product-name">
                                                        <div>
                                                            <span>Yêu thích</span>
                                                            Chuột Gaming Không Dây Ziyou Attack Shark R1 Siêu Nhẹ Chip Paw3311 
                                                            Cực Mạnh 3 Chế Độ Kết Nối Bluetooth / 2.4G / Type-C
                                                        </div>
                                                    </div>
                                                    <div className="recommened-product-promotion">
                                                        <div className="discount">Giảm 5k</div>
                                                        <div className="description">Rẻ vô địch</div>
                                                    </div>
                                                    <div className="recommened-product-sale-information">
                                                        <div className="recommened-product-price">
                                                            <span>₫</span>
                                                            <strong>419.000</strong>
                                                        </div>
                                                        <span>Đã bán 4.7k</span>
                                                    </div>
                                                </div>
                                                <div className="search-same-product">
                                                    Tìm sản phẩm tương tự
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recommened-product-item">
                                                <div 
                                                    className="recommened-product-image"
                                                    style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyza1sxemk3x3d_tn.webp")` }}
                                                ></div>
                                                <div className="recommened-product-detail-information">
                                                    <div className="recommened-product-name">
                                                        <div>
                                                            <span>Yêu thích</span>
                                                            Combo 12 hộp 600 chiếc tăm chỉ nhak hoa xỉa răng, 
                                                            vệ sinh sạch sẽ kẽ răng chân nướu chăm sóc răng miệng
                                                        </div>
                                                    </div>
                                                    <div className="recommened-product-promotion">
                                                        <div className="description">Rẻ vô địch</div>
                                                    </div>
                                                    <div className="recommened-product-sale-information">
                                                        <div className="recommened-product-price">
                                                            <span>₫</span>
                                                            <strong>9.900</strong>
                                                        </div>
                                                        <span>Đã bán 18.7k</span>
                                                    </div>
                                                </div>
                                                <div className="search-same-product">
                                                    Tìm sản phẩm tương tự
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recommened-product-item">
                                                <div 
                                                    className="recommened-product-image"
                                                    style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lrva2lh530yhed_tn.webp")` }}
                                                ></div>
                                                <div className="recommened-product-detail-information">
                                                    <div className="recommened-product-name">
                                                        <div>
                                                            <span>Yêu thích</span>
                                                            Đồng hồ nam Olevs lộ cơ automatich chính hãng, 
                                                            Đồng hồ đeo tay cao cấp có kèm hộp tặng bạn trai, 
                                                            Đồng hồ lịch chống nước
                                                        </div>
                                                    </div>
                                                    <div className="recommened-product-promotion">
                                                        <div className="discount">Giảm 20k</div>
                                                    </div>
                                                    <div className="recommened-product-sale-information">
                                                        <div className="recommened-product-price">
                                                            <span>₫</span>
                                                            <strong>1.385.000</strong>
                                                        </div>
                                                        <span>Đã bán 624</span>
                                                    </div>
                                                </div>
                                                <div className="search-same-product">
                                                    Tìm sản phẩm tương tự
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recommened-product-item">
                                                <div 
                                                    className="recommened-product-image"
                                                    style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-ltc7gb5dnstp1a_tn.webp")` }}
                                                ></div>
                                                <div className="recommened-product-detail-information">
                                                    <div className="recommened-product-name">
                                                        <div>
                                                            <span>Yêu thích</span>
                                                            Bộ 2 Ống Tay Chống Nắng, Găng Tay Chống Nắng Hàn Quốc Let's slim
                                                        </div>
                                                    </div>
                                                    <div className="recommened-product-promotion">
                                                        <div className="description">Rẻ vô địch</div>
                                                    </div>
                                                    <div className="recommened-product-sale-information">
                                                        <div className="recommened-product-price">
                                                            <span>₫</span>
                                                            <strong>2.850</strong>
                                                        </div>
                                                        <span>Đã bán 198k</span>
                                                    </div>
                                                </div>
                                                <div className="search-same-product">
                                                    Tìm sản phẩm tương tự
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recommened-product-item">
                                                <div 
                                                    className="recommened-product-image"
                                                    style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz6j18tzc6g174_tn.webp")` }}
                                                ></div>
                                                <div className="recommened-product-detail-information">
                                                    <div className="recommened-product-name">
                                                        <div>
                                                            <span>Yêu thích</span>
                                                            Bộ Quần Áo Bóng Đá Câu Lạc Bộ Barcelona Mùa giải 24/25 
                                                            MERRY SPORT Vải Thái Cao Cấp Barca Phom 50-90kg
                                                        </div>
                                                    </div>
                                                    <div className="recommened-product-promotion">
                                                        <div className="discount">Giảm 12k</div>
                                                    </div>
                                                    <div className="recommened-product-sale-information">
                                                        <div className="recommened-product-price">
                                                            <span>₫</span>
                                                            <strong>265.000</strong>
                                                        </div>
                                                        <span>Đã bán 2.4k</span>
                                                    </div>
                                                </div>
                                                <div className="search-same-product">
                                                    Tìm sản phẩm tương tự
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recommened-product-item">
                                                <div 
                                                    className="recommened-product-image"
                                                    style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ly0k5qrovy6xe4_tn.webp")` }}
                                                ></div>
                                                <div className="recommened-product-detail-information">
                                                    <div className="recommened-product-name">
                                                        <div>
                                                            <span>Yêu thích</span>
                                                            Loa Bluetooth JBL GO 3 New 2024 Nhỏ Gọn Công Suất 3W 
                                                            Chơi Nhạc 5H Chống Nước IP67 Bảo Hành Lỗi 1 Đổi 1 PK_DKYN
                                                        </div>
                                                    </div>
                                                    <div className="recommened-product-promotion">
                                                        <div className="discount">Giảm 10k</div>
                                                    </div>
                                                    <div className="recommened-product-sale-information">
                                                        <div className="recommened-product-price">
                                                            <span>₫</span>
                                                            <strong>205.000</strong>
                                                        </div>
                                                        <span>Đã bán 84.7</span>
                                                    </div>
                                                </div>
                                                <div className="search-same-product">
                                                    Tìm sản phẩm tương tự
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recommened-product-item">
                                                <div 
                                                    className="recommened-product-image"
                                                    style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzctnbawwd5t49_tn.webp")` }}
                                                ></div>
                                                <div className="recommened-product-detail-information">
                                                    <div className="recommened-product-name">
                                                        <div>
                                                            <span>Yêu thích</span>
                                                            Sữa rửa mặt giúp làm sạch sâu dành cho da dầu 
                                                            Cerave Foaming Facial Cleans 236ML
                                                        </div>
                                                    </div>
                                                    <div className="recommened-product-promotion">
                                                        <div className="discount">Giảm 8k</div>
                                                    </div>
                                                    <div className="recommened-product-sale-information">
                                                        <div className="recommened-product-price">
                                                            <span>₫</span>
                                                            <strong>316.000</strong>
                                                        </div>
                                                        <span>Đã bán 79.4k</span>
                                                    </div>
                                                </div>
                                                <div className="search-same-product">
                                                    Tìm sản phẩm tương tự
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recommened-product-item">
                                                <div 
                                                    className="recommened-product-image"
                                                    style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/f953aa4b941e31d6b621b7aea7da4ace_tn.webp")` }}
                                                ></div>
                                                <div className="recommened-product-detail-information">
                                                    <div className="recommened-product-name">
                                                        <div>
                                                            <span>Yêu thích</span>
                                                            FACOTA | Giày Dép Sandal Nam, Nữ 
                                                            Unisex Thể Thao Xám Phối Dây Đi Học, Đi Chơi NN09
                                                        </div>
                                                    </div>
                                                    <div className="recommened-product-promotion">
                                                        <div className="discount">Giảm 19k</div>
                                                        <div className="description">Rẻ vô địch</div>
                                                    </div>
                                                    <div className="recommened-product-sale-information">
                                                        <div className="recommened-product-price">
                                                            <span>₫</span>
                                                            <strong>227.430</strong>
                                                        </div>
                                                        <span>Đã bán 4k</span>
                                                    </div>
                                                </div>
                                                <div className="search-same-product">
                                                    Tìm sản phẩm tương tự
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recommened-product-item">
                                                <div 
                                                    className="recommened-product-image"
                                                    style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz7079ymfk2566_tn.webp")` }}
                                                ></div>
                                                <div className="recommened-product-detail-information">
                                                    <div className="recommened-product-name">
                                                        <div>
                                                            <span>Yêu thích</span>
                                                            Tai nghe Bluetooth Không Dây TWS JBL Live Free 2 Chất Âm Signature Sound, 
                                                            Mic Đàm Thoại, Pin Trâu Chống Nước [XÁM]
                                                        </div>
                                                    </div>
                                                    <div className="recommened-product-promotion">
                                                        <div className="description">Đang bán chạy</div>
                                                    </div>
                                                    <div className="recommened-product-sale-information">
                                                        <div className="recommened-product-price">
                                                            <span>₫</span>
                                                            <strong>559.000</strong>
                                                        </div>
                                                        <span>Đã bán 5.2k</span>
                                                    </div>
                                                </div>
                                                <div className="search-same-product">
                                                    Tìm sản phẩm tương tự
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recommened-product-item">
                                                <div 
                                                    className="recommened-product-image"
                                                    style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lz9wj8agmvsj86_tn.webp")` }}
                                                ></div>
                                                <div className="recommened-product-detail-information">
                                                    <div className="recommened-product-name">
                                                        <div>
                                                            <span>Yêu thích</span>
                                                            Tai nghe Bluetooth Realfit F3 Tai nghe thể thao khử tiếng ồn -38dB 360° 
                                                            Âm thanh không gian Bass tốt
                                                        </div>
                                                    </div>
                                                    <div className="recommened-product-promotion">
                                                        <div className="discount">Giảm 100k</div>
                                                        <div className="description">Rẻ vô địch</div>
                                                    </div>
                                                    <div className="recommened-product-sale-information">
                                                        <div className="recommened-product-price">
                                                            <span>₫</span>
                                                            <strong>279.000</strong>
                                                        </div>
                                                        <span>Đã bán 7.9</span>
                                                    </div>
                                                </div>
                                                <div className="search-same-product">
                                                    Tìm sản phẩm tương tự
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recommened-product-item">
                                                <div 
                                                    className="recommened-product-image"
                                                    style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/tw-11134201-23030-c90hsnxzi6nv28_tn.webp")` }}
                                                ></div>
                                                <div className="recommened-product-detail-information">
                                                    <div className="recommened-product-name">
                                                        <div>
                                                            <span>Yêu thích</span>
                                                            [Mã FADEP0706 giảm đến 30k đơn từ 99k] 
                                                            Áo Thun Dệt Họa Tiết Kẻ Sọc Ngắn Tay Dáng Rộng Vải Mát Thời Trang Mùa Hè
                                                        </div>
                                                    </div>
                                                    <div className="recommened-product-promotion">
                                                    </div>
                                                    <div className="recommened-product-sale-information">
                                                        <div className="recommened-product-price">
                                                            <span>₫</span>
                                                            <strong>126.400</strong>
                                                        </div>
                                                        <span>Đã bán 3k</span>
                                                    </div>
                                                </div>
                                                <div className="search-same-product">
                                                    Tìm sản phẩm tương tự
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recommened-product-item">
                                                <div 
                                                    className="recommened-product-image"
                                                    style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/sg-11134201-22120-nj2mnnh77ukv3a_tn.webp")` }}
                                                ></div>
                                                <div className="recommened-product-detail-information">
                                                    <div className="recommened-product-name">
                                                        <div>
                                                            <span>Yêu thích</span>
                                                            Dây buộc tóc thắt bím cao cấp, 
                                                            thun cột tóc co giãn vintage dễ thương phong cách hàn quốc nhiều màu - Mã DT021
                                                        </div>
                                                    </div>
                                                    <div className="recommened-product-promotion">
                                                        <div className="discount">Giảm 5k</div>
                                                        <div className="description">Rẻ vô địch</div>
                                                    </div>
                                                    <div className="recommened-product-sale-information">
                                                        <div className="recommened-product-price">
                                                            <span>₫</span>
                                                            <strong>3.400</strong>
                                                        </div>
                                                        <span>Đã bán 17.6k</span>
                                                    </div>
                                                </div>
                                                <div className="search-same-product">
                                                    Tìm sản phẩm tương tự
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recommened-product-item">
                                                <div 
                                                    className="recommened-product-image"
                                                    style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-ly0mb77kcaw346_tn.webp")` }}
                                                ></div>
                                                <div className="recommened-product-detail-information">
                                                    <div className="recommened-product-name">
                                                        <div>
                                                            <span>Yêu thích</span>
                                                            FJbottle Bình Giữ Nhiệt 750ml/1000ml Tumbler 
                                                            bình nước giữ nhiệt Có túi Giữ lạnh và nóng
                                                        </div>
                                                    </div>
                                                    <div className="recommened-product-promotion">
                                                        <div className="discount">Giảm 20k</div>
                                                        <div className="description">Rẻ vô địch</div>
                                                    </div>
                                                    <div className="recommened-product-sale-information">
                                                        <div className="recommened-product-price">
                                                            <span>₫</span>
                                                            <strong>255.000</strong>
                                                        </div>
                                                        <span>Đã bán 13.3k</span>
                                                    </div>
                                                </div>
                                                <div className="search-same-product">
                                                    Tìm sản phẩm tương tự
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recommened-product-item">
                                                <div 
                                                    className="recommened-product-image"
                                                    style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lt066vic237odb_tn.webp")` }}
                                                ></div>
                                                <div className="recommened-product-detail-information">
                                                    <div className="recommened-product-name">
                                                        <div>
                                                            <span>Yêu thích</span>
                                                            [ Hàng chính hãng ] Giày Onitsuka Tiger Mexico 66 White/Black mẫu mới hot trend năm 2024
                                                        </div>
                                                    </div>
                                                    <div className="recommened-product-promotion">
                                                        <div className="discount">Giảm 250k</div>
                                                    </div>
                                                    <div className="recommened-product-sale-information">
                                                        <div className="recommened-product-price">
                                                            <span>₫</span>
                                                            <strong>1.425.000</strong>
                                                        </div>
                                                        <span>Đã bán 1k</span>
                                                    </div>
                                                </div>
                                                <div className="search-same-product">
                                                    Tìm sản phẩm tương tự
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="recommened-product-item">
                                                <div 
                                                    className="recommened-product-image"
                                                    style={{ backgroundImage: `url("https://down-vn.img.susercontent.com/file/sg-11134201-22090-gp57eqoqjshv9f_tn.webp")` }}
                                                ></div>
                                                <div className="recommened-product-detail-information">
                                                    <div className="recommened-product-name">
                                                        <div>
                                                            <span>Yêu thích</span>
                                                            Balo Laptop Đựng Vừa Laptop 15.6 inch Praza Deer - BLS0190
                                                        </div>
                                                    </div>
                                                    <div className="recommened-product-promotion">
                                                    </div>
                                                    <div className="recommened-product-sale-information">
                                                        <div className="recommened-product-price">
                                                            <span>₫</span>
                                                            <strong>169.000</strong>
                                                        </div>
                                                        <span>Đã bán 1.1k</span>
                                                    </div>
                                                </div>
                                                <div className="search-same-product">
                                                    Tìm sản phẩm tương tự
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="btn-see-all-recommened-product">Xem thêm</div>
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
