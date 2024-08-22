import React, { Component } from "react";
import "./HomeHeader.scss";

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <>
                <div className="hheader-wrapper">
                    <div className="main-header">
                        <div className="logo"><i className="fas fa-shopping-cart"></i> Origin Dev</div>
                        <div className="header-content">
                            <div className="basic-nav-bar">
                                <div className="nav-item homepage">
                                    <i class="fas fa-home"></i>
                                    Trang chủ
                                </div>
                                <div className="nav-item contact">
                                    <i class="fab fa-instagram"></i>
                                    <i class="fab fa-facebook"></i>
                                    Liên hệ
                                </div>
                                <div className="nav-item support">
                                    <i class="fas fa-question-circle"></i>
                                    Hỗ trợ
                                </div>
                                <div className="nav-item choose-language">
                                    <i class="fas fa-globe"></i>
                                    Tiếng Việt
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                                <div className="nav-item my-account">
                                    <i class="fas fa-user"></i>
                                    Tài khoản của tôi
                                </div>
                            </div>
                            <div className="display-infor">
                                <div className="search-container">
                                    <div className="search-bar">
                                        <input
                                            className="search-input"
                                            placeholder="Bạn muốn mua gì hôm nay?" 
                                        />
                                        <div className="search-icon">
                                            <i className="fas fa-search"></i>
                                        </div>
                                    </div>
                                    <div className="search-recommened">
                                        <a href="facebook.com">đồng hồ trẻ em</a>
                                        <a href="facebook.com">chuột Attact Shark R1</a>
                                        <a href="facebook.com">tăm chỉ nha khoa</a>
                                        <a href="facebook.com">áo Barcelona</a>
                                        <a href="facebook.com">iPhone 15 Pro Max</a>
                                        <a href="facebook.com">xe máy Vision 2024</a>
                                    </div>
                                </div>
                                <div className="infor-icon">
                                    <i className="fas fa-bell"></i>
                                    <i className="fas fa-cart-arrow-down"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-header">
                        <div className="promise-title">Cam kết</div>
                        <div className="promise-item authentic-product">
                            <i class="fas fa-check"></i>
                            100% hàng thật
                        </div>
                        <div className="promise-item fake-product">
                            <i class="fas fa-undo-alt"></i>
                            Hoàn 200% nếu hàng giả
                        </div>
                        <div className="promise-item return-product">
                            <i class="fas fa-exchange-alt"></i>
                            30 ngày đổi trả
                        </div>
                        <div className="promise-item fast-delivery">
                            <i class="fas fa-truck"></i>
                            Giao hàng nhanh 2h
                        </div>
                        <div className="promise-item cheap-price">
                            <i class="fas fa-tag"></i>
                            Giá siêu rẻ
                        </div>
                        <div className="promise-item free-shiping">
                            <i class="fas fa-wallet"></i>
                            Freeship mọi đơn
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HomeHeader;
