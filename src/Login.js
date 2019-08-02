import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
    state = {
        redirectReferrer: false
    };

    login = () => {
        const { Model } = this.props;
        Model.authenticate(() => {
            this.setState({ redirectReferrer: true });
        });
    };

    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectReferrer } = this.state;

        if (redirectReferrer) return <Redirect to={from} />;

        return (
            <div>
                <p>You must log in to view page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}

export default Login;
