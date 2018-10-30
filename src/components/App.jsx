import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import English from "./English";
import Translations from "./Translations";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={English}/>
                    <Route exact path="/translations/" component={Translations}/>
                </div>
            </Router>
        );
    }
}

export default App;