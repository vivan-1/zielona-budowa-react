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
                <div id="app">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/portfolio/:section/:project/:view" component={props => <Home {...props}/>}/>
                        <Route component={Home}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;