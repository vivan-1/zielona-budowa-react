import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Home from "./Home";

class App extends Component {
    render() {
        return (
            <Router>
                <div id="app">
                    <Route path="/" component={Home}/>
                </div>
            </Router>
        );
    }
}

export default App;