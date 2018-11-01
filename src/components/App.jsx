import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Home from "./Home";
import Viewer from "./Viewer";

class App extends Component {
    render() {
        return (
            <Router>

                    <Switch>
                        <Route exact path="/" component={props => <Home {...props}/>}/>
                        <Route exact path="/portfolio/:section/:project/:view" component={props => <Home {...props}/>}/>
                        <Route component={props => <Home {...props}/>}/>
                    </Switch>

            </Router>
        );
    }
}

export default App;