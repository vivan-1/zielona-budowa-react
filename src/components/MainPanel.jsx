import React, {Component} from "react";
import {Col} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";

import SplashScreen from "./SplashScreen";
import Viewer from "./Viewer";


class MainPanel extends Component {

    constructor(props) {
        super(props);

        this.goToUrl = this.goToUrl.bind(this);

        this.state = {
            section: "",
            project: "",
            view: 0
        }

    }



    //goes to specific url
    goToUrl(url) {

        this.props.history.push(url); //go to the specified url

    }

    //take project details from url
    setDetails() {


    }

    componentDidMount() {
            this.setDetails();

    }

    render() {


        let style = {
            backgroundImage: "url('../../public/images/background.jpg')"
        };
        return(
            <Col xs={12} sm={9} md={10} style={style} id="main-panel">
                <Router>
                    <div>
                        <Route exact path="/" component={SplashScreen}/>
                        <Route path="/portfolio/:section/:project/:view" component={Viewer}/>
                    </div>
                </Router>
            </Col>
        );
    }
}

export default MainPanel;