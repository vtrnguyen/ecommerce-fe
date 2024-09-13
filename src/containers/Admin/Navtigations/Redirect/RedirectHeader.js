import React from "react";
import "./RedirectHeader.scss";
import { Link } from "react-router-dom";

class RedirectHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <>
                <div className="redirect-header-container">
                    <div className="logo-container">
                        <div className="logo"><i className="fas fa-shopping-cart"></i> Origin Dev</div>
                        <div className="sub-text">Chi tiết danh mục</div>
                    </div>
                    <div className="redirect-to-management-page">
                        <Link 
                            to={"/admin"}
                            className="btn-redirect"
                        >
                            Trở về trang quản trị
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default RedirectHeader;
