import React, { Component } from "react";
import { connect } from "react-redux";
import { loginSuccess } from "../../store/authSlice";
import { handleLogin } from "../../services/userService";
import "./Login.scss";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
        }
    }

    handleChangeUsername = (e) => {
        this.setState({
            email: e.target.value,
        })
    }

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value,
        })
    }

    handleLogin = async () => {
        try {
            const userInfor = {
                email: this.state.email,
                password: this.state.password,
            };
            const response = await handleLogin(userInfor);

            if (response.loginInfor.errCode === 0) {
                this.props.loginSuccess(response.loginInfor);
            } else {
                this.setState({ errMessage: response.loginInfor.errMessage });
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword,
        })
    }

    handleKeyDown = (e) => {
        if (e.key === "Enter" || e.keyCode === 13) {
            this.handleLogin();
        }
    }

    render() {
        return (
            <>
                <div className="login-header">
                    <div className="logo-container">
                        <div className="logo"><i className="fas fa-shopping-cart"></i> Origin Dev</div>
                        <div className="sub-text">Đăng nhập</div>
                    </div>
                    <div className="helper">Bạn cần giúp đỡ?</div>
                </div>
                <div className="login-background">
                    <div className="login-container">
                        <div className="login-content row">
                            <div className="col-12 text-login">Đăng nhập</div>
                            <div className="col-12 form-group login-input">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Tên đăng nhập, email hoặc số điện thoại"
                                    value={this.state.email}
                                    onChange={(e) => this.handleChangeUsername(e)}
                                    onKeyDown={(e) => this.handleKeyDown(e)}
                                />
                            </div>
                            <div className="col-12 form-group login-input">
                                <div className="custom-input-password">
                                    <input 
                                        type={this.state.isShowPassword ? "text" : "password"}
                                        className="form-control" 
                                        placeholder="Mật khẩu"
                                        value={this.state.password}
                                        onChange={(e) => this.handleChangePassword(e)}
                                        onKeyDown={(e) => this.handleKeyDown(e)}
                                    />
                                    <span
                                        onClick={() => {this.handleShowHidePassword()}}
                                    >
                                        <i className={this.state.isShowPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                                    </span>
                                </div>
                            </div>
                            <div className="col-12" style={{color: 'red'}}>
                                {this.state.errMessage}
                            </div>
                            <div className="btn col-12">
                                <button 
                                    className="btn-login"
                                    onClick={() => this.handleLogin()}
                                    >Đăng nhập
                                </button>
                            </div>
                            <div className="btn col-12">
                                <button 
                                    className="btn-create-new-account"
                                    onClick={() => this.handleLogin()}
                                    >Tạo tài khoản
                                </button>
                            </div>
                            <div className="col-12">
                                <span className="forgot-password">Quên mật khẩu?</span>
                            </div>
                            <div className="col-12 text-center mt-2">
                                <span className="text-other-login">Hoặc</span>
                            </div>
                            <div className="col-12 social-login">
                                <i className="fab fa-google google"></i>
                                <i className="fab fa-facebook-f facebook"></i>
                                <i className="fab fa-instagram instagram"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = {
    loginSuccess,
}

export default connect(null, mapDispatchToProps)(Login);
