import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { logout } from "../../store/authSlice";
import { fetchDataFail } from "../../store/userSlice";

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfor: {},
        }
    }

    componentDidMount() {
        this.setState({
            userInfor: this.props.userInfor,
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userInfor !== this.props.userInfor) {
            this.setState({
                userInfor: this.props.userInfor,
            });
        }
    }

    handleSeeUserInfor = () => {
        alert("button See User Infor is licked!!!");
    }

    handleBtnLogout = () => {
        this.props.fetchDataFail();
        this.props.logout();
    }

    render() {
        let userInfor = this.state.userInfor;
        
        return (
            <>
                <div className="hheader-wrapper">
                    <div className="main-header">
                        <div className="logo"><i className="fas fa-shopping-cart"></i> Origin Dev</div>
                        <div className="header-content">
                            <div className="basic-nav-bar">
                                <div className="nav-item homepage">
                                    <i className="fas fa-home"></i>
                                    Trang chủ
                                </div>
                                <div className="nav-item contact">
                                    <i className="fab fa-instagram"></i>
                                    <i className="fab fa-facebook"></i>
                                    Liên hệ
                                </div>
                                <div className="nav-item support">
                                    <i className="fas fa-question-circle"></i>
                                    Hỗ trợ
                                </div>
                                <div className="nav-item choose-language">
                                    <i className="fas fa-globe"></i>
                                    Tiếng Việt
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                                <div className="nav-item my-account">
                                    <i className="fas fa-user"></i>
                                    { userInfor && userInfor.firstName && userInfor.lastName 
                                        ? userInfor.firstName + " " + userInfor.lastName 
                                        : "Tài khoản của tôi" 
                                    }
                                    { userInfor && userInfor.firstName && userInfor.lastName 
                                        ? 
                                        <div className="popup-menu">
                                            <div className="popup-item" onClick={this.handleSeeUserInfor}>Thông tin cá nhân</div>
                                            <div className="popup-item" onClick={this.handleBtnLogout}>Đăng xuất</div>
                                        </div>
                                        :
                                        <></>
                                    }
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
                                        <a href="/">đồng hồ trẻ em</a>
                                        <a href="/">chuột Attact Shark R1</a>
                                        <a href="/">tăm chỉ nha khoa</a>
                                        <a href="/">áo Barcelona</a>
                                        <a href="/">iPhone 15 Pro Max</a>
                                        <a href="/">xe máy Vision 2024</a>
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
                            <i className="fas fa-check"></i>
                            100% hàng thật
                        </div>
                        <div className="promise-item fake-product">
                            <i className="fas fa-undo-alt"></i>
                            Hoàn 200% nếu hàng giả
                        </div>
                        <div className="promise-item return-product">
                            <i className="fas fa-exchange-alt"></i>
                            30 ngày đổi trả
                        </div>
                        <div className="promise-item fast-delivery">
                            <i className="fas fa-truck"></i>
                            Giao hàng nhanh 2h
                        </div>
                        <div className="promise-item cheap-price">
                            <i className="fas fa-tag"></i>
                            Giá siêu rẻ
                        </div>
                        <div className="promise-item free-shiping">
                            <i className="fas fa-wallet"></i>
                            Freeship mọi đơn
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = {
    logout, fetchDataFail
}

export default connect(null, mapDispatchToProps)(HomeHeader);
