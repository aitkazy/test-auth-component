import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import authenticate from "./authenticate";
import AuthButton from "./AuthButton";
import { Protected, Public } from "./Pages";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

class App extends Component {
    Model = authenticate;

    render() {
        return (
            <Router>
                <div>
                    <AuthButton Model={this.Model} />
                    <ul>
                        <li>
                            <Link to="/public">Public Page</Link>
                        </li>
                        <li>
                            <Link to="/protected">Protected Page</Link>
                        </li>
                    </ul>
                    <Route path="/public" component={Public} />
                    <Route
                        path="/login"
                        render={props => (
                            <Login Model={this.Model} {...props} />
                        )}
                    />
                    <PrivateRoute path="/protected" component={Protected} />
                </div>
            </Router>
        );
    }
}

export default App;
