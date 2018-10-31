import React, {Component} from "react";


class SplashScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="main-panel-container">
                <div className="view-content">
                    <div id="title-box">
                        <span id="title">zielona budowa</span><br/>
                        <span id="subtitle">pracownia architektoniczna</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default SplashScreen;
