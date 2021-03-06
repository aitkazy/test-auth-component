import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
    const { component: Component, isAuthenticated, ...rest } = props;

    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default PrivateRoute;
