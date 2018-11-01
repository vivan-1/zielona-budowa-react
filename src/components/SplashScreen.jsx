import React, {Component} from "react";


class SplashScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(

                <div className="view-content" id="splash-screen">
                    <div id="title-box">
                        <span id="title">zielona budowa</span><br/>
                        <span id="subtitle">pracownia architektoniczna</span>
                    </div>
                </div>

        );
    }
}

export default SplashScreen;
