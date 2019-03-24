import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";


import Home from "./containers/Home/Home";
import Viewer from "./containers/Viewer/Viewer";


class App extends Component {
    render() {
        return (
            <div id="app">
                <Router>

                    <Switch>
                        <Route exact path="/" component={props => <Home {...props}/>}/>
                        <Route exact path="/portfolio/:section/:project/:view" component={props => <Home {...props}/>}/>
                        <Route exact path="/koncepcje/" component={props => <Home {...props}/>}/>
                        <Route exact path="/koncepcje/podglad/:video" component={props => <Home {...props}/>}/>
                        <Route component={props => <Home {...props}/>}/>
                    </Switch>

                </Router>
            </div>
        );
    }
}

export default App;