import React from "react";
import { connect } from "react-redux";
import { logout } from "../../store/authSlice";
import { fetchDataFail } from "../../store/userSlice";
import "./AdminHeader.scss";

class AdminHeader extends React.Component {
    
    handleSeeUserInfor = () => {
        alert("Clicked me!!!");
    }

    handleBtnLogout = () => {
        this.props.fetchDataFail();
        this.props.logout();
    }

    render() {
        let { userInfor } = this.props;
        return (
            <div className="admin-header-wrapper">
                <div className="logo-container">
                    <div className="logo"><i className="fas fa-shopping-cart"></i> Origin Dev</div>
                    <div className="sub-text">Kênh quản lý</div>
                </div>
                <div className="admin-infor">
                    <div className="admin-display-name">Xin chào, {userInfor.firstName + " " + userInfor.lastName}</div>
                    { userInfor && (userInfor.firstName || userInfor.lastName )
                        ? 
                        <div className="popup-menu">
                            <div className="popup-item" onClick={() => this.handleSeeUserInfor()}>Thông tin cá nhân</div>
                            <div className="popup-item" onClick={() => this.handleBtnLogout()}>Đăng xuất</div>
                        </div>
                        :
                        <></>
                    }
                    <div className="admin-avatar">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    logout, fetchDataFail
}

export default connect(null, mapDispatchToProps)(AdminHeader);
