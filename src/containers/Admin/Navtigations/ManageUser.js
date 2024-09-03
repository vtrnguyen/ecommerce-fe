import React from "react";
import { handleCreateUser, handleGetAllUser, handleDeleteUser, handleUpdateUser } from "../../../services/userService";
import { toast } from "react-toastify";
import "./ManageUser.scss";

class ManageUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isOpenFormCreateUser: false,
            isOpenFormUpdateUser: false,
            isShowDeleteModal: false,
            selectedDeleteUserID: "",
            selectedDeleleUserName: "",

            // create
            createFirstName: "",
            createLastName: "",
            createEmail: "",
            createPassword: "",
            createRoleID: "",
            createPhoneNumber: "",
            createAddress: "",
            createGender: "",

            // update
            updateID: "",
            updateEmail: "",
            updateFirstName: "",
            updateLastName: "",
            updateRoleID: "",
            updatePhoneNumber: "",
            updateAddress: "",
            updateGender: "",
        }
    }

    async componentDidMount() {
        let users = await handleGetAllUser();

        if (users && users.users && users.users.errCode === 0) {
            this.setState({
                users: users.users.users,
            });
        } else {
            this.setState({
                users: [],
            });
        }
    }

    handleBtnEditClick = (updateUser) => {
        this.setState({
            isOpenFormUpdateUser: true,
            updateID: updateUser.id,
            updateEmail: updateUser.email,
            updateFirstName: updateUser.firstName,
            updateLastName: updateUser.lastName,
            updateRoleID: updateUser.roleID,
            updatePhoneNumber: updateUser.phoneNumber,
            updateAddress: updateUser.address,
            updateGender: updateUser.gender,
        });
    }
    
    handleBtnDeleteClick = async (deletedUserID, deletedUserName) => {
        this.setState({
            isShowDeleteModal: true,
            selectedDeleteUserID: deletedUserID,
            selectedDeleleUserName: deletedUserName,
        })
    }

    toggleModal = () => {
        this.setState({
            isShowDeleteModal: !this.state.isShowDeleteModal,
            selectedDeleteUserID: "",
            selectedDeleleUserName: "",
        });
    }

    handleConfirmDeleteUser = async () => {
        let deletedInfor = await handleDeleteUser(this.state.selectedDeleteUserID);

        if (deletedInfor.errCode === 0) {
            toast.success("Xóa người dùng thành công");
            this.setState({
                isShowDeleteModal: false,
                selectedDeleteUserID: "",
                selectedDeleleUserName: "",
            });

            await this.componentDidMount();
        } else {
            toast.error("Xóa người dùng thất bại!!!");
        }
    }

    handleBtnCreateNewUser = () => {
        this.setState({
            isOpenFormCreateUser: !this.state.isOpenFormCreateUser,
            createFirstName: "",
            createLastName: "",
            createEmail: "",
            createPassword: "",
            createRoleID: "",
            createPhoneNumber: "",
            createAddress: "",
            createGender: "",
        });
    }

    handleSubmitFormCreateNewUser = async () => {
        if (!this.state.createEmail || !this.state.createPassword ||
            !this.state.createFirstName || !this.state.createLastName ||
            !this.state.createRoleID || !this.state.createPhoneNumber ||
            !this.state.createAddress || !this.state.createGender
        ) {
            toast.warn("Không được để trống thông tin!!!");
        } else {
            let createNewUserInfor = await handleCreateUser({
                firstName: this.state.createFirstName,
                lastName: this.state.createLastName,
                email: this.state.createEmail,
                password: this.state.createPassword,
                roleID: this.state.createRoleID,
                address: this.state.createAddress,
                phoneNumber: this.state.createPhoneNumber,
                gender: this.state.createGender,
            });
    
            if (createNewUserInfor && createNewUserInfor.createUserInfor && createNewUserInfor.createUserInfor.errCode === 0) {
                toast.success("Tạo người dùng thành công");
    
                this.setState({
                    isOpenFormCreateUser: !this.state.isOpenFormCreateUser,
                    createFirstName: "",
                    createLastName: "",
                    createEmail: "",
                    createPassword: "",
                    createRoleID: "",
                    createPhoneNumber: "",
                    createAddress: "",
                    createGender: "",
                });
    
                await this.componentDidMount();
            } else if (createNewUserInfor && createNewUserInfor.createUserInfor && createNewUserInfor.createUserInfor.errCode === -1) {
                toast.error("Email đã tồn tại!!!");
            } else {
                toast.error("Tạo người dùng không thành công!!!");
            }
        }
    }

    handleOnChangeInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    handleUpdateUser = async () => {
        if (!this.state.updateFirstName || !this.state.updateLastName ||
            !this.state.updateRoleID || !this.state.updatePhoneNumber ||
            !this.state.updateAddress || !this.state.updateGender
        ) {
            toast.warn("Không được để trống thông tin!!!");
        } else {
            let updateInfor = await handleUpdateUser({
                id: this.state.updateID,
                firstName: this.state.updateFirstName,
                lastName: this.state.updateLastName,
                roleID: this.state.updateRoleID,
                phoneNumber: this.state.updatePhoneNumber,
                gender: this.state.updateGender,
                address: this.state.updateAddress,
            })
    
            if (updateInfor && updateInfor.updateUserInfor && updateInfor.updateUserInfor.errCode === 0) {
                toast.success("Cập nhật thông tin thành công");

                this.setState({
                    isOpenFormUpdateUser: false,
                    updateID: "",
                    updateEmail: "",
                    updateFirstName: "",
                    updateLastName: "",
                    updateRoleID: "",
                    updatePhoneNumber: "",
                    updateAddress: "",
                    updateGender: "",
                })

                await this.componentDidMount();
            } else {
                toast.error("Cập nhật thông tin thất bại!!!");
            }
        }
    }

    handleCancelUpdateUser = () => {
        this.setState({
            isOpenFormUpdateUser: false,
            updateID: "",
            updateEmail: "",
            updateFirstName: "",
            updateLastName: "",
            updateRoleID: "",
            updatePhoneNumber: "",
            updateAddress: "",
            updateGender: "",
        });
    }

    render() {
        let { users, isShowDeleteModal, 
            isOpenFormCreateUser, selectedDeleleUserName,
            isOpenFormUpdateUser,
            updateEmail, updateFirstName, updateLastName,
            updateAddress, updatePhoneNumber,
        } = this.state;
        
        return (
            <div className="manage-user-container">
                <div className="information-title">Quản lý người dùng hệ thống</div>
                <div className="information-content">
                    <div 
                        className="btn btn-success mb-4"
                        onClick={() => this.handleBtnCreateNewUser()}
                    >
                        {!isOpenFormCreateUser ? "Tạo mới" : "Hủy bỏ"}
                    </div>
                    {isOpenFormCreateUser && (
                        <form className="create-user-form">
                            <div className="form-group row mb-3">
                                <div className="col-6">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Email"
                                        name="createEmail"
                                        onChange={(event) => this.handleOnChangeInput(event)}
                                    />
                                </div>
                                <div className="col-6">
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Mật khẩu"
                                        name="createPassword"
                                        onChange={(event) => this.handleOnChangeInput(event)}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <div className="col-4">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Họ" 
                                        name="createFirstName"
                                        onChange={(event) => this.handleOnChangeInput(event)}
                                    />
                                </div>
                                <div className="col-4">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Tên" 
                                        name="createLastName"
                                        onChange={(event) => this.handleOnChangeInput(event)}
                                    />
                                </div>
                                <div className="col-4">
                                    <select 
                                        className="form-select" 
                                        name="createRoleID"
                                        onChange={this.handleOnChangeInput}
                                    >
                                        <option selected value="R0">Role ID</option>
                                        <option value="R0">R0 - Quản trị viên</option>
                                        <option value="R1">R1 - Người dùng hệ thống</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <div className="col-4">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Số điện thoại" 
                                        name="createPhoneNumber"
                                        onChange={this.handleOnChangeInput}
                                    />
                                </div>
                                <div className="col-4">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Địa chỉ" 
                                        name="createAddress"
                                        onChange={(event) => this.handleOnChangeInput(event)}
                                    />
                                </div>
                                <div className="col-4">
                                    <select 
                                        className="form-select" 
                                        name="createGender"
                                        defaultValue={"M"}
                                        onChange={(event) => this.handleOnChangeInput(event)}
                                    >
                                        <option value="M">Giới tính</option>
                                        <option value="M">M - Nam</option>
                                        <option value="F">F - Nữ</option>
                                        <option value="O">O - Khác</option>
                                    </select>
                                </div>
                            </div>
                            <button 
                                type="button" 
                                className="btn btn-primary mb-4"
                                onClick={() => this.handleSubmitFormCreateNewUser()}
                            >
                                Tạo người dùng
                            </button>
                        </form>
                    )}
                    <div className="information-table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Họ và tên</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Quyền người dùng</th>
                                    <th scope="col">Địa chỉ</th>
                                    <th scope="col">Số điện thoại</th>
                                    <th scope="col">Giới tính</th>
                                    <th scope="col">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users && users.length > 0 && users.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.firstName + " " + item.lastName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.roleID}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.gender}</td>
                                            <td>
                                                <button 
                                                    className="btn btn-danger"
                                                    onClick={() => this.handleBtnDeleteClick(item.id, item.firstName + " " + item.lastName)}
                                                >
                                                    Xóa
                                                </button>
                                                <button 
                                                    className="btn btn-primary"
                                                    onClick={() => this.handleBtnEditClick(item)}
                                                >
                                                    Sửa
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    {isOpenFormUpdateUser && (
                        <form className="create-user-form">
                            <div className="form-group row mb-3">
                                <div className="col-12">
                                    <input 
                                        type="email" 
                                        className="form-control"
                                        disabled
                                        value={updateEmail}
                                    />
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <div className="col-4">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Họ"
                                        value={updateFirstName}
                                        name="updateFirstName"
                                        onChange={(event) => this.handleOnChangeInput(event)}
                                    />
                                </div>
                                <div className="col-4">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Tên" 
                                        value={updateLastName}
                                        name="updateLastName"
                                        onChange={(event) => this.handleOnChangeInput(event)}
                                    />
                                </div>
                                <div className="col-4">
                                    <select 
                                        className="form-select" 
                                        name="updateRoleID"
                                        defaultValue={"R0"}
                                        onChange={this.handleOnChangeInput}
                                    >
                                        <option value="R0">Role ID</option>
                                        <option value="R0">R0 - Quản trị viên</option>
                                        <option value="R1">R1 - Người dùng hệ thống</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <div className="col-4">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Số điện thoại"
                                        value={updatePhoneNumber}
                                        name="updatePhoneNumber"
                                        onChange={this.handleOnChangeInput}
                                    />
                                </div>
                                <div className="col-4">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Địa chỉ"
                                        value={updateAddress}
                                        name="updateAddress"
                                        onChange={(event) => this.handleOnChangeInput(event)}
                                    />
                                </div>
                                <div className="col-4">
                                    <select 
                                        className="form-select" 
                                        name="updateGender"
                                        defaultValue={"M"}
                                        onChange={(event) => this.handleOnChangeInput(event)}
                                    >
                                        <option value="M">Giới tính</option>
                                        <option value="M">M - Nam</option>
                                        <option value="F">F - Nữ</option>
                                        <option value="O">O - Khác</option>
                                    </select>
                                </div>
                            </div>
                            <button 
                                type="button" 
                                className="btn btn-primary mb-4"
                                onClick={() => this.handleUpdateUser()}
                            >
                                Lưu thông tin
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-warning mb-4"
                                onClick={() => this.handleCancelUpdateUser()}
                            >
                                Hủy bỏ
                            </button>
                        </form>
                    )}
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
                                    {`Bạn có chắc chắn muốn xóa người dùng ${selectedDeleleUserName}?`}
                                </div>
                                <div className="modal-footer">
                                    <button 
                                        type="button" 
                                        className="btn btn-danger" 
                                        onClick={() => this.handleConfirmDeleteUser()}
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

                {isShowDeleteModal && <div className="modal-backdrop fade show" onClick={() => this.toggleModal()}></div>}
            </div>
        )
    }
}

export default ManageUser;
