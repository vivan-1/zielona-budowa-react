import React, {Component} from "react";
import {Image} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
                    <Route component={props => <Viewer {...props}/>}/>
            </div>
        );
    }
}

export default MainPanel;