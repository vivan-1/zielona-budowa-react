import React, {Component} from "react";
import {Col} from "react-bootstrap";


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

        let {section} = this.props.match;
        console.log(section);

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

                <div id="main-panel-container">
                    <div className="view-content">
                        <div id="title-box">
                            <span id="title">zielona budowa</span><br/>
                            <span id="subtitle">pracownia architektoniczna</span>
                        </div>
                    </div>
                </div>

                <nav id="main-panel-footer" aria-label="...">
                    <ul className="pager">
                        <li id="prev" className="previous"><a id="prev-link" href="#"><span aria-hidden="true">&larr;</span> Wstecz</a></li>
                        <li id="next" className="next"><a id="next-link" href="#">Dalej <span aria-hidden="true">&rarr;</span></a></li>
                    </ul>
                </nav>
            </Col>
        );
    }
}

export default MainPanel;