import React, {Component} from "react";
import {Col} from "react-bootstrap";


class MainPanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Col xs={12} sm={10} id="main-panel">

                <div id="main-panel-container">

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