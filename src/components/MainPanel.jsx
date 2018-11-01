import React, {Component} from "react";
import {Col} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import SplashScreen from "./SplashScreen";
import Viewer from "./Viewer";


class MainPanel extends Component {

    constructor(props) {
        super(props);


    }


    render() {


        let style = {
            backgroundImage: "url('../../public/images/background.jpg')"
        };
        return (
            <div id="main-panel">
                <Switch>
                    <Route exact path="/" component={SplashScreen}/>
                    <Route path="/portfolio/:section/:project/:view" component={props => <Viewer {...props}/>}/>
                    <Route component={SplashScreen}/>
                </Switch>

            </div>
        );
    }
}

export default MainPanel;