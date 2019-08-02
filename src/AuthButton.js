import React from "react";
import { withRouter } from "react-router-dom";

const AuthButton = props => {
    const { history, Model } = props;

    if (Model.isAuthenticated) {
        return (
            <p>
                {"Welcome! "}
                <button
                    onClick={() => {
                        Model.signout(() => history.push("/"));
                    }}
                >
                    Sign out
                </button>
            </p>
        );
    } else {
        return <p>You are not logged in.</p>;
    }
};

export default withRouter(AuthButton);
