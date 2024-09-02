import React from "react";
import "./AdminContent.scss";
import ManageUser from "./Navtigations/ManageUser";
import ManageCategory from "./Navtigations/ManageCategory";

class AdminContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNav: "user",
            displayComponent: <ManageUser />,
        }
    }

    handleClickNavItem = (option) => {
        let displayComponent = <></>;
        switch(option) {
            case "user":
                displayComponent = <ManageUser />
                break;
            case "category":
                displayComponent = <ManageCategory />
                break;
            default:
                displayComponent = <ManageUser />
        }

        this.setState({
            selectedNav: option,
            displayComponent,
        });
    }

    render() {
        let { selectedNav, displayComponent } = this.state;
        
        return (
            <div className="admin-content-wrapper">
                <div className="nav-content">
                    <div 
                        className={`nav-item manage-user ${selectedNav === "user" ? "active" : ""}`}
                        onClick={() => this.handleClickNavItem("user")}
                    >
                        <i className="fas fa-chart-line"></i>
                        <span>Người dùng hệ thống</span>
                    </div>
                    <div 
                        className={`nav-item manage-category ${selectedNav === "category" ? "active" : ""}`}
                        onClick={() => this.handleClickNavItem("category")}
                    >
                        <i className="fas fa-tags"></i>
                        <span>Danh mục sản phẩm</span>
                    </div>
                    <div 
                        className={`nav-item manage-product ${selectedNav === "product" ? "active" : ""}`}
                        onClick={() => this.handleClickNavItem("product")}
                    >
                        <i className="fab fa-product-hunt"></i>
                        <span>Sản phẩm</span>
                    </div>
                    <div 
                        className={`nav-item manage-order ${selectedNav === "order" ? "active" : ""}`}
                        onClick={() => this.handleClickNavItem("order")}
                    >
                        <i className="fas fa-shopping-basket"></i>
                        <span>Đơn hàng</span>
                    </div>
                    <div 
                        className={`nav-item manage-supplier ${selectedNav === "supplier" ? "active" : ""}`}
                        onClick={() => this.handleClickNavItem("supplier")}
                    >
                        <i className="fas fa-handshake"></i>
                        <span>Nhà cung cấp</span>
                    </div>
                </div>
                <div className="display-information">
                    {displayComponent}
                </div>
            </div>
        )
    }
}

export default AdminContent;
