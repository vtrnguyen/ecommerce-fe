import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataSuccess } from "../../store/userSlice";
import "./HomePage.scss";
import HomeHeader from "./HomeHeader";
import HomeContent from "./HomeContent";
// import HomeFooter from "./HomeFooter";
import { handleGetUserInfor } from "../../services/userService";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfor: {},
        }
    }    

    async componentDidMount() {
        await this.getInforUser();
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.userInfor !== this.props.userInfor) {
            await this.getInforUser();
        }
    }

    getInforUser = async () => {
        let { userInfor } = this.props;
        
        if (userInfor && userInfor.id) {
            let user = await handleGetUserInfor(userInfor.id);
            
            if (user && user.userInfor && user.userInfor.errCode === 0) {
                this.setState({
                    userInfor: user.userInfor.userInfor,
                });

                this.props.fetchDataSuccess(user.userInfor);
            } else {
                this.setState({
                    userInfor: this.state.userInfor,
                });
            }
        }
    } 

    render() {
        let { userInfor } = this.state;

        return (
            <>
                <HomeHeader userInfor={userInfor} />
                <HomeContent />
            </>
        )
    }
}

// get user (id, roleID) from auth slice
const mapStateToProps = (state) => ({
    userInfor: state.auth.user,
});

const mapDispatchToProps = {
    fetchDataSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
