import React from "react";
import { connect } from "react-redux";
import AdminHeader from "./AdminHeader";
import "./AdminPage.scss";
import AdminContent from "./AdminContent";

class AdminPage extends React.Component {
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

    render() {
        let { userInfor } = this.state;
        
        return (
            <>
                <AdminHeader userInfor={userInfor}/>
                <AdminContent />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    userInfor: state.user.userInfor,
});

export default connect(mapStateToProps, null)(AdminPage);
