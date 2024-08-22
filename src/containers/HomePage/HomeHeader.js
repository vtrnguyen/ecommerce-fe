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
                <div className="hheader-container">
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
                            <div className="search-bar">
                                <input
                                    className="search-input"
                                    placeholder="Bạn muốn mua gì hôm nay?" 
                                />
                                <div className="search-icon">
                                    <i className="fas fa-search"></i>
                                </div>
                            </div>
                            <div className="infor-icon">
                                <i className="fas fa-bell"></i>
                                <i className="fas fa-cart-arrow-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HomeHeader;
