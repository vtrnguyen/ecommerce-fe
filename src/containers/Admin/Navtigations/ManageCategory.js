import React from "react";
import { handleCreateNewCategory, handleGetAllCategory, 
    handleDeleteCategory, handleUpdateCategory,
} from "../../../services/categoryService";
import "./ManageCategory.scss";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

class ManageCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            isShowDeleteModal: false,
            isUpdating: false,

            // create category
            createCategoryName: "",
            createCategoryImage: "",

            // delete category
            deleteCategoryID: "",
            deleteCategoryName: "",

            // update category
            updateCategoryID: "",
            updateCategoryName: "",
            updateCategoryImage: "",
        }
    }

    async componentDidMount() {
        let categories = await handleGetAllCategory();

        if (categories && categories.allCategoryInfor && categories.allCategoryInfor.errCode === 0) {
            this.setState({
                categories: categories.allCategoryInfor.categories,
            });
        } else {
            this.setState({
                categories: [],
            });
        }
    }

    handleOnChangeInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    handleOnChangeImage = async (e) => {
        let data = e.target.files;
        let file = data[0];
        let { isUpdating } = this.state;
        if (file) {
            let encodedImageBase64 = await this.encodeBase64(file);

            if (!isUpdating) {
                this.setState({
                    createCategoryImage: encodedImageBase64
                });
            } else {
                this.setState({
                    updateCategoryImage: encodedImageBase64
                });
            }
        }
    }

    handleSubmitFormCreateCategory = async () => {
        if (this.state.createCategoryName && this.state.createCategoryImage) {
            let newCategoryInfor = await handleCreateNewCategory({
                categoryName: this.state.createCategoryName,
                categoryImage: this.state.createCategoryImage,
            });
    
            if (newCategoryInfor && newCategoryInfor.newCategoryInfor && newCategoryInfor.newCategoryInfor.errCode === 0) {
                toast.success("Thêm mới danh mục thành công");
                this.setState({
                    createCategoryName: "",
                    createCategoryImage: "",
                });

                await this.componentDidMount();
            } else {
                toast.error("Thêm mới danh mục thất bại!!!");
            }
        } else {
            toast.warn("Không được để trống thông tin!!!");
        }
    }

    encodeBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    toggleModal = () => {
        this.setState({
            isShowDeleteModal: false,
            deleteCategoryID: "",
            deleteCategoryName: "",
        });
    }

    handleClickBtnDelete = (deleteCategoryID, deleteCategoryName) => {
        this.setState({
            isShowDeleteModal: true,
            deleteCategoryID,
            deleteCategoryName,
        });
    }

    handleConfirmDeleteCategory = async () => {
        let deletedInfor = await handleDeleteCategory(this.state.deleteCategoryID);

        if (deletedInfor && deletedInfor.errCode === 0) {
            toast.success(`Đã xóa danh mục "${this.state.deleteCategoryName}"`);
            this.setState({
                isShowDeleteModal: false,
                deleteCategoryID: "",
                deleteCategoryName: "",
            });

            await this.componentDidMount();
        } else {
            toast.error("Xóa danh mục không thành công");
        }
    }

    handleClickBtnUpdate = (updateID, updateName, updateImage) => {
        this.setState({
            isUpdating: true,
            updateCategoryID: updateID,
            updateCategoryName: updateName,
            updateCategoryImage: updateImage,
        }, () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    handleSubmitFormUpdateCategory = async () => {
        if (!this.state.updateCategoryID || !this.state.updateCategoryName || !this.state.updateCategoryImage) {
            toast.warn("Không được để trống thông tin!!!");
        } else {
            let updateCategoryInfor = await(handleUpdateCategory({
                id: this.state.updateCategoryID,
                categoryName: this.state.updateCategoryName,
                categoryImage: this.state.updateCategoryImage,
            }));

            if (updateCategoryInfor && updateCategoryInfor.updateCategoryInfor && updateCategoryInfor.updateCategoryInfor.errCode === 0) {
                toast.success("Cập nhật thông tin thành công");
        
                this.setState({
                    isUpdating: false,
                    updateCategoryID: "",
                    updateCategoryName: "",
                    updateCategoryImage: "",
                });
    
                await this.componentDidMount();
            } else {
                toast.error("Cập nhật thông tin thất bại!!!");
            }
        }
    }

    render() {
        let { categories, createCategoryName, 
            isShowDeleteModal, deleteCategoryName,
            isUpdating, updateCategoryName,
        } = this.state;

        let statusNameCategoryName = !isUpdating ? "createCategoryName" : "updateCategoryName";
        let statusNameCategoryValue = !isUpdating ? createCategoryName : updateCategoryName;

        return (
            <div className="manage-category-container">
                <div className="information-title">Quản lý danh mục sản phẩm</div>
                <div className="information-content">
                    <form className="create-category-form">
                        <div className="form-group row mb-3">
                                    <div className="col-6 mb-2">
                                        <input
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Tên danh mục"
                                            name={statusNameCategoryName}
                                            value={statusNameCategoryValue}
                                            onChange={(event) => this.handleOnChangeInput(event)}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <input 
                                            type="file" 
                                            className="form-control" 
                                            placeholder="Hình ảnh"
                                            onChange={(event) => this.handleOnChangeImage(event)}
                                        />
                                    </div>
                        </div>
                        {!isUpdating
                        ?
                            <button 
                                type="button" 
                                className="btn btn-primary mb-4"
                                onClick={() => this.handleSubmitFormCreateCategory()}
                            >
                                Tạo danh mục
                            </button>
                        :
                            <button 
                                type="button" 
                                className="btn btn-success mb-4"
                                onClick={() => this.handleSubmitFormUpdateCategory()}
                            >
                                Lưu thông tin
                            </button>
                        }
                    </form>
                    <div className="information-table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên danh mục</th>
                                    <th scope="col">Hình ảnh</th>
                                    <th scope="col">Hành động</th>
                                    <th scope="col">Chi tiết danh mục</th>
                                </tr>
                            </thead>
                            <tbody>
                            {categories && categories.length > 0 && categories.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.categoryName}</td>
                                        <td>
                                            <img className="category-image" src={item.image} alt={item.categoryName} />
                                        </td>
                                        <td>
                                            <button 
                                                className="btn btn-danger"
                                                onClick={() => this.handleClickBtnDelete(item.id, item.categoryName)}
                                            >
                                                Xóa
                                            </button>
                                            <button 
                                                className="btn btn-primary"
                                                onClick={() => this.handleClickBtnUpdate(item.id, item.categoryName, item.image)}
                                            >
                                                Sửa
                                            </button>
                                        </td>
                                        <td>
                                            <Link 
                                                to={`/admin/category-item/${item.id}`}
                                            >
                                                Đi
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>

                    {isShowDeleteModal && (
                        <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Hành động không thể phục hồi!</h5>
                                        <button type="button" className="btn close" onClick={() => this.toggleModal()}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        {`Bạn có chắc chắn muốn xóa danh mục "${deleteCategoryName}"?`}
                                    </div>
                                    <div className="modal-footer">
                                        <button 
                                            type="button" 
                                            className="btn btn-danger"
                                            onClick={() => this.handleConfirmDeleteCategory()}
                                        >
                                            Xóa
                                        </button>
                                        <button type="button" className="btn btn-secondary" onClick={() => this.toggleModal()}>
                                            Hủy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default ManageCategory;
