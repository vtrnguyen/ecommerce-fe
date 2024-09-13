import React from "react";
import RedirectHeader from "./RedirectHeader";
import { handleGetCategoryInfor } from "../../../../services/categoryService";
import withRouter from "../../../../hoc/WithRouter";
import "./ManageCategoryItem.scss";
import { Button } from "react-bootstrap";

class ManageCategoryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryParentInfor: {},
        };
    }

    async componentDidMount() {
        let categoryParentInfor = await handleGetCategoryInfor(this.props.params.id);
        
        if (categoryParentInfor) {
            this.setState({
                categoryParentInfor: categoryParentInfor.getCategoryInfor.categoryInfor,
            });
        }
    }

    handleAddNewCategoryItem = () => {
        alert("Clicked me!!!");
    }
    
    render() {
        let { categoryParentInfor } = this.state;

        return (
            <>
                <RedirectHeader />
                <div className="manage-category-item-wrapper">
                    <div className="manage-category-item-title">Quản lý chi tiết danh mục</div>
                    <div className="manage-category-item-content">
                        <div className="category-parent-infor">
                            <div className="category-parent-name">{categoryParentInfor ? categoryParentInfor.categoryName : ""}</div>
                            <div className="category-parent-image">
                                <img 
                                    src={categoryParentInfor.image} 
                                    alt={`${categoryParentInfor.categoryName}`}
                                >
                                </img>
                            </div>
                        </div>
                        <div className="btn-add-category-item">
                            <Button 
                                variant="success"
                                onClick={() => this.handleAddNewCategoryItem()}
                            >
                                Thêm chi tiết danh mục
                            </Button>
                        </div>
                        <div className="category-item-table">
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Tên</th>
                                        <th scope="col">Hình ảnh</th>
                                        <th scope="col">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>
                                            <Button 
                                                className="btn-update-category-item"
                                                variant="primary"
                                            >
                                                Sửa
                                            </Button>
                                            <Button 
                                                className="btn-delete-category-item"
                                                variant="danger"
                                            >
                                                Xóa
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(ManageCategoryItem);
